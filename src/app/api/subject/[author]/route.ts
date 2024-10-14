import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma'

export async function GET( req: Request, { params }: { params: { author: 'stella' | 'stefany' } }) {

  const { author } = params

  try {
    const questions = await prisma.question.findMany({
      where: {
        author: {
          name: {
            equals: String(author),
          },
        },
      },
      select: {
        subject: true
      },
      distinct: ['subject'],
    })

    return NextResponse.json(questions, { status: 200 });
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Ocorreu um erro' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
