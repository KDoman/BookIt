export interface fakeData {
  id: string;
  name: string;
  type: string;
  street: string;
  city: string;
  rating: number;
  available_slots: number;
  phones: string[];
  services: service[];
  staff: worker[];
}

export interface service {
  id: string;
  type: string;
  price: number;
}

export interface worker {
  id: string;
  name: string;
  image: string;
}

export const fakeData: fakeData[] = [
  {
    id: "1",
    name: "Luxury Spa & Wellness",
    type: "spa",
    street: "Relaksowa 12",
    city: "Warszawa",
    rating: 4.8,
    available_slots: 5,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 120 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789", "123456789"],
    staff: [
      { name: "Magłorzata", image: "imageURL", id: "malgorzata" },
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
  {
    id: "2",
    name: "Barber Shop Classic",
    type: "barber",
    street: "Męska 10",
    city: "Kraków",
    rating: 4.5,
    available_slots: 3,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 30 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789"],
    staff: [
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
  {
    id: "3",
    name: "Strzyżenie Męskie Pro",
    type: "fryzjer męski",
    street: "Barberska 7",
    city: "Wrocław",
    rating: 4.7,
    available_slots: 2,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 30 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789"],
    staff: [
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
  {
    id: "4",
    name: "Salon Fryzjerski Glamour",
    type: "fryzjer damski",
    street: "Modna 15",
    city: "Poznań",
    rating: 4.9,
    available_slots: 4,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 30 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789"],
    staff: [
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
  {
    id: "5",
    name: "Studio Pięknych Brwi",
    type: "brwi",
    street: "Kosmetyczna 5",
    city: "Łódź",
    rating: 4.6,
    available_slots: 6,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 30 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789"],
    staff: [
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
  {
    id: "6",
    name: "Rzęsy Perfect Look",
    type: "rzęsy",
    street: "Stylowa 22",
    city: "Gdańsk",
    rating: 4.7,
    available_slots: 3,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 30 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789"],
    staff: [
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
  {
    id: "7",
    name: "Masaże Relaksacyjne",
    type: "masaż",
    street: "Zdrowa 8",
    city: "Katowice",
    rating: 4.8,
    available_slots: 7,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 30 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789"],
    staff: [
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
  {
    id: "8",
    name: "Treningi Personalne FitPro",
    type: "treningi personalne",
    street: "Sportowa 30",
    city: "Szczecin",
    rating: 4.9,
    available_slots: 5,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 30 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789"],
    staff: [
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
  {
    id: "9",
    name: "Centrum Fizjoterapii Zdrowie",
    type: "fizjoterapia",
    street: "Rehabilitacyjna 4",
    city: "Bydgoszcz",
    rating: 4.7,
    available_slots: 3,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 30 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789"],
    staff: [
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
  {
    id: "10",
    name: "VetCare - Przychodnia Weterynaryjna",
    type: "przychodnia weterynaryjna",
    street: "Zwierzęca 18",
    city: "Lublin",
    rating: 4.6,
    available_slots: 4,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 30 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789"],
    staff: [
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
  {
    id: "11",
    name: "DogSpa - Pielęgnacja Psów",
    type: "salon pielęgnacji psów",
    street: "Psiarska 12",
    city: "Rzeszów",
    rating: 4.8,
    available_slots: 6,
    services: [
      { id: "service1", type: "strzyżenie brzytwą", price: 30 },
      { id: "service2", type: "long trim", price: 50 },
    ],
    phones: ["123456789"],
    staff: [
      { name: "Kacper", image: "imageURL", id: "kacper" },
      { name: "Patryk", image: "imageURL", id: "patryk" },
      { name: "Daria", image: "imageURL", id: "daria" },
    ],
  },
];
