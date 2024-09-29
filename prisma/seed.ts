import { prisma } from '@/lib/prisma';
import data from '../src/data/questions_seed';

async function main() {
  await prisma.option.deleteMany()
  await prisma.question.deleteMany()

  for (const question of data.questions) {
    let authorId: string | undefined = undefined;

    // Se a questão tiver um autor definido
    if (question.author) {
      // Verificar se o autor já existe no banco de dados
      const existingAuthor = await prisma.author.findMany({
        where: { name: question.author }
      });

      // Se o autor existir, obter seu ID, caso contrário, criar um novo autor
      if (existingAuthor) {
        authorId = existingAuthor[0]?.id;
      } else {
        const newAuthor = await prisma.author.create({
          data: { name: question.author }
        });
        authorId = newAuthor.id;
      }
    }

    if (authorId === undefined) {
      throw new Error('authorId não pode ser undefined');
    }

    // Insere a questão no banco de dados
    const createdQuestion = await prisma.question.create({
      data: {
        question: question.question,
        answer: question.answer,
        authorId,  // Associando o ID do autor (se houver)
        subject: question.subject || null, // Matéria opcional
        options: {
          create: question.options.map(option => ({ text: option }))
        }
      }
    });

    console.log(`Questão criada: ${createdQuestion.id}`);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
