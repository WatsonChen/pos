import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET /api/menu
export async function GET() {
  try {
    const menus = await prisma.menu.findMany();
    return NextResponse.json(menus);
  } catch (error) {
    console.error("Error fetching menu:", error);
    return NextResponse.json(
      { error: "Failed to fetch menu" },
      { status: 500 }
    );
  }
}

// POST /api/menu
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, price, imageUrl } = body;

    const newMenu = await prisma.menu.create({
      data: {
        name,
        description,
        price,
        imageUrl,
      },
    });

    return NextResponse.json(newMenu);
  } catch (error) {
    return NextResponse.json({ error: "新增菜單失敗" }, { status: 500 });
  }
}
