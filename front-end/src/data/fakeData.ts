export interface fakeData {
  id: string;
  name: string;
  type: string;
  street: string;
  city: string;
  rating: number;
  available_slots: number;
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
  },
  {
    id: "2",
    name: "Barber Shop Classic",
    type: "barber",
    street: "Męska 10",
    city: "Kraków",
    rating: 4.5,
    available_slots: 3,
  },
  {
    id: "3",
    name: "Strzyżenie Męskie Pro",
    type: "fryzjer_meski",
    street: "Barberska 7",
    city: "Wrocław",
    rating: 4.7,
    available_slots: 2,
  },
  {
    id: "4",
    name: "Salon Fryzjerski Glamour",
    type: "fryzjer_damski",
    street: "Modna 15",
    city: "Poznań",
    rating: 4.9,
    available_slots: 4,
  },
  {
    id: "5",
    name: "Studio Pięknych Brwi",
    type: "brwi",
    street: "Kosmetyczna 5",
    city: "Łódź",
    rating: 4.6,
    available_slots: 6,
  },
  {
    id: "6",
    name: "Rzęsy Perfect Look",
    type: "rzesy",
    street: "Stylowa 22",
    city: "Gdańsk",
    rating: 4.7,
    available_slots: 3,
  },
  {
    id: "7",
    name: "Masaże Relaksacyjne",
    type: "masaz",
    street: "Zdrowa 8",
    city: "Katowice",
    rating: 4.8,
    available_slots: 7,
  },
  {
    id: "8",
    name: "Treningi Personalne FitPro",
    type: "treningi_personalne",
    street: "Sportowa 30",
    city: "Szczecin",
    rating: 4.9,
    available_slots: 5,
  },
  {
    id: "9",
    name: "Centrum Fizjoterapii Zdrowie",
    type: "fizjoterapia",
    street: "Rehabilitacyjna 4",
    city: "Bydgoszcz",
    rating: 4.7,
    available_slots: 3,
  },
  {
    id: "10",
    name: "VetCare - Przychodnia Weterynaryjna",
    type: "przychodnia_weterynaryjna",
    street: "Zwierzęca 18",
    city: "Lublin",
    rating: 4.6,
    available_slots: 4,
  },
  {
    id: "11",
    name: "DogSpa - Pielęgnacja Psów",
    type: "salon_pielęgnacji_psów",
    street: "Psiarska 12",
    city: "Rzeszów",
    rating: 4.8,
    available_slots: 6,
  },
];
