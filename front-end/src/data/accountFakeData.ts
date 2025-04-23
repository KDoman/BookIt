interface FutureOrPastVisits {
  id: string;
  serviceName: string;
  serviceType: string;
  date: string;
  price: number;
  rating?: {
    rate: number;
    message: string;
  };
  address: {
    city: string;
    street: string;
  };
}

export interface servicesFakeData {
  id: string;
  name: string;
  surname: string;
  email: string;
  history: FutureOrPastVisits[];
  futureVisits: FutureOrPastVisits[];
  phone: string;
}

export const accountFakeData: servicesFakeData[] = [
  {
    id: "user1",
    name: "Anna",
    surname: "Kowalska",
    email: "anna.kowalska@example.com",
    phone: "+48 600 123 456",
    history: [
      {
        id: "visit1",
        serviceName: "Masaż relaksacyjny",
        serviceType: "Wellness",
        date: "2024-12-01",
        price: 200,
        rating: {
          rate: 0,
          message: "",
        },
        address: {
          city: "Warszawa",
          street: "Górczewska 200",
        },
      },
      {
        id: "visit2",
        serviceName: "Fryzjer damski",
        serviceType: "Beauty",
        date: "2024-10-15",
        price: 150,
        rating: {
          rate: 4,
          message: "Miło, ale mogłoby być bardziej dokładnie.",
        },
        address: {
          city: "Warszawa",
          street: "Błękitna 20A",
        },
      },
    ],
    futureVisits: [
      {
        id: "visit3",
        serviceName: "Manicure hybrydowy",
        serviceType: "Beauty",
        date: "2025-05-10",
        price: 120,
        address: {
          city: "Warszawa",
          street: "Górczewska 200",
        },
      },
    ],
  },
];
