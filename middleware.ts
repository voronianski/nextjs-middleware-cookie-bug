import { NextRequest, NextResponse } from 'next/server';
import cookie from 'cookie';

// put this value into a cookie with the name "test"
// consentId=aaa7fe7f-e59d-47c3-a53d-cd844fb9ad6b&datestamp=Thu+Dec+01+2022+16%3A57%3A23+GMT%2B0100+(Central+European+Standard+Time)&version=6.32.0&interactionCount=1&isGpcEnabled=0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1
const COOKIE_NAME = 'test';

export async function middleware(req: NextRequest) {
  const cookieValueByLib = decodeURIComponent(cookie.parse(req.headers.get('cookie'))[COOKIE_NAME]);
  const cookieValueByNext = req.cookies.get(COOKIE_NAME)?.value;

  console.log('cookieValueByLib: ', cookieValueByLib)
  console.log('cookieValueByNext: ', cookieValueByNext)
}
