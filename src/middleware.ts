import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

export async function middleware(req: NextRequest) {
  // Получаем токен сессии
  const session = await getToken({ req, secret });

  // Проверяем, является ли путь, который необходимо защитить
  if (req.nextUrl.pathname.startsWith("/profile")) {
    // Если пользователь не авторизован, перенаправляем на страницу входа
    if (!session) {
      const url = req.nextUrl.clone();
      url.pathname = "/authorization/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
