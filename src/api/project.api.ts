import courseone from '../assets/images/courses/courseone.png'
import coursetwo from '../assets/images/courses/coursetwo.png'
import coursethree from '../assets/images/courses/coursethree.png'




export const courseData: {
    heading: string;
    imgSrc: string;
    Association: string;
    students: number;
    name: string;
    price: number;
    rating: number;
    civilite : string;
  }[] = [
      {
        heading: 'Soutien scolaire personnalisé',
        Association: "Association Mizara",
        imgSrc: courseone,
        students: 150,
        name: "Hanitra",
        price: 20,
        rating: 3,
        civilite : "Mme"
      },
      {
        heading: 'Accompagnement des familles',
        Association: "Association Mizara",
        imgSrc: coursetwo,
        students: 130,
        name: "Haja",
        price: 20,
        rating: 2,
        civilite : "Mr"
      },
      {
        heading: 'Distribution de fournitures scolaires',
        Association: "Association Mizara",
        imgSrc: coursethree,
        students: 120,
        name: "Abel",
        price: 20,
        rating: 4,
        civilite : "Mr"
      },
      {
        heading: 'Parrainage scolaire',
        Association: "Association Mizara",
        imgSrc: courseone,
        students: 150,
        name: "Hanitra",
        price: 20,
        rating: 12,
        civilite : "Mme"
      },
      {
        heading: ' Ateliers d’éveil et d’alphabétisation',
        Association: "Association Mizara",
        imgSrc: coursetwo,
        students: 150,
        name: "Haja",
        price: 20,
        rating: 11,
        civilite : "Mr",
      },
      {
        heading: 'chaque enfant ait les mêmes chances de réussir',
        Association: "Association Mizara",
        imgSrc: coursethree,
        students: 150,
        name: "Hanitra",
        price: 20,
        rating: 10,
        civilite : "Mme",
      },
    ]