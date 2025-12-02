import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main(){
    const demoUserId = "fed60112-cb69-43a7-90e9-112954ce4a46"

    await prisma.product.createMany({
        data: Array.from({ length: 25 }).map((_, i) => ({
            userId: demoUserId,
            name: `Prodcut ${i + 1}`,
            price: (Math.random() * 90 + 10).toFixed(2),
            quantity: Math.floor(Math.random() * 20),
            lowStockAt: 5,
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
        })),
    });

    console.log("Seed data created successfully!");
    console.log(`Created 25 products for user ID: ${demoUserId}`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });