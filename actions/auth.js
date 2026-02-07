"use server";

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function ensureUser() {
  const { userId } = await auth();
  if (!userId) return;

  const existing = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!existing) {
    await db.user.create({
      data: {
        clerkUserId: userId,
      },
    });
  }
}
