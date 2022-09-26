import { PrismaClient, Prisma } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

const ids = {
  organizations: {
    organization_1: {
      id: uuidv4(),
      offices: {
        okotoks_office: {
          id: uuidv4(),
        },
        calgary_office: {
          id: uuidv4(),
        },
      },
      employees: {
        foreman: {
          id: uuidv4(),
        },
      },
    },
  },
};

const organizationData: Prisma.OrganizationCreateInput[] = [
  {
    id: ids.organizations.organization_1.id,
    name: "First Organization",
    offices: {
      create: [
        {
          id: ids.organizations.organization_1.offices.okotoks_office.id,
          name: "Okotoks Office",
          address: {
            create: {
              address: "145 Fisher St",
              city: "Okotoks",
              region: "Alberta",
              country: "Canada",
              postalCode: "T1S 1A8",
              phone: "403-938-7920",
            },
          },
        },
        {
          id: ids.organizations.organization_1.offices.calgary_office.id,
          name: "Calgary Office",
          address: {
            create: {
              address: "961 7th Ave",
              address2: "154",
              city: "Calgary",
              region: "Alberta",
              country: "Canada",
              postalCode: "T2P 0W4",
            },
          },
        },
      ],
    },
  },
];

const userData: Prisma.UserCreateInput[] = [
  {
    firstName: "First",
    lastName: "User",
    middleName: "Seed",
    phone: "+14039737408",
    employees: {
      create: [
        {
          id: ids.organizations.organization_1.employees.foreman.id,
          firstName: "First",
          middleName: "Organization",
          lastName: "Foreman",
          jobTitle: "Foreman",
          role: "FOREMAN",
          organization: {
            connect: {
              id: ids.organizations.organization_1.id,
            },
          },
          offices: {
            create: [
              {
                createdBy: "Seeder",
                office: {
                  connect: {
                    id: ids.organizations.organization_1.offices.okotoks_office
                      .id,
                  },
                },
              },
              {
                createdBy: "Seeder",
                office: {
                  connect: {
                    id: ids.organizations.organization_1.offices.calgary_office
                      .id,
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding...`);

  for (const org of organizationData) {
    await prisma.organization.create({
      data: org,
    });
  }

  for (const user of userData) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
