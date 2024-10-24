import {
  TypeProduct,
  type CatalogData,
  ProductFathersTypes,
  type TexturesTypes,
} from "./types";

export const windowsData: CatalogData[] = [
  {
    name: "Ventana banderola",
    img: ['1', '2', '3'],
    id: "banderola",
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
    ],
    description:
      "La abertura tipo banderola es una elección adecuada para espacios donde se busca la entrada de luz y ventilación controlada, son perfectas para habitaciones pequeñas o áreas donde el espacio es limitado. Su diseño permite una apertura parcial de la hoja hacia adentro, lo que permite una regulación precisa del flujo de aire y admite colocar tela mosquitera en el exterior del vano. Son ideales para baños, despensas y ventanas en altura.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Ventana Banderola de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Fabricada con aluminio resistente a la corrosión, garantiza una larga vida útil.",
        },
        {
          title: "Diseño",
          text: "Ideal para espacios con limitaciones de espacio, ocupando poco espacio. Aporta un toque tradicional y elegante a cualquier espacio.",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite un control preciso de la ventilación y la entrada de luz.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una mayor comodidad.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de acabados y colores.",
        },
      ],
      maxMeasures: "1200x1800 mm",
      minMeasures: "550x550 mm",
      features: [
        "Aportan un toque tradicional y elegante.",
        "Ventilación suave y regulada.",
        "Ideales para lugares con espacio limitado.",
        "Requieren poco mantenimiento.",
      ],
    },
  },
  {
    name: "Ventana corrediza",
    img: ['1', '2', '3', '4'],
    id: 'corrediza',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "corrediza",
    ],
    description:
      "La abertura de hojas corredizas es una opción clásica para maximizar la entrada de luz natural sin comprometer el espacio, ya que se deslizan sobre el mismo plano del muro donde están colocadas. Perfectas para áreas donde el espacio es limitado, como balcones y terrazas, o también para grandes luces en quinchos y galerías agregando mas cantidad de hojas donde crean una transición suave entre el interior y el exterior. Admite colocar hojas con tela mosquitera corredizas en el exterior.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Abertura Corrediza de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Diseño",
          text: "Permite maximizar la entrada de luz natural sin ocupar espacio adicional.",
        },
        {
          title: "Ahorro de Espacio",
          text: "Ideal para áreas con limitaciones de espacio, como balcones y terrazas.",
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de tamaños y diseños para adaptarse a las necesidades de diseño de cualquier proyecto.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Opcionales",
          text: "Admite la instalación de hojas con tela mosquitera corrediza.",
        },
      ],
      minMeasures: "1200x600 mm",
      maxMeasures: "5750x3000 mm",
      features: [
        "Maximiza la entrada de luz",
        "No requiere espacio adicional para abrirse.",
        "Transición suave entre interiores y exteriores",
        "Disponible en una variedad de tamaños y diseños",
      ],
    },
  },
  {
    name: "Ventana de rebatir",
    img: ['1', '2', '3', '4'],
    id: 'rebatir',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "practica",
    ],
    description:
      "La abertura rebatible es la elección perfecta cuando se busca una apertura amplia y despejada para una gran ventilación o de acceso. Es ideal para áreas que conectan el interior con patios, jardines o terrazas. Gracias a su apertura total hacia el interior, las aberturas rebatibles de acuerdo a su ubicación y tamaño brindan una sensación de espacio y continuidad entre ambas áreas.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Abertura Rebatible de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente, diseñada para resistir el paso del tiempo.",
        },
        {
          title: "Diseño",
          text: "Aporta un estilo tradicional y elegante que se adapta a una variedad de ambientes y estilos arquitectónicos.",
        },
        {
          title: "Tipo Apertura",
          text: "Proporciona una entrada espaciosa y luminosa.",
        },
        {
          title: "Ventilación",
          text: "Ofrece una ventilación suave y regulada, ideal para mantener un ambiente cómodo.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para satisfacer las preferencias estéticas de cada espacio.",
        },
      ],
      minMeasures: "550x550 mm",
      maxMeasures: "1200x1800 mm",
      features: [
        "Diseño Clásico que aporta un estilo tradicional y elegante.",
        "Apertura Amplia para ambientes espaciosos y luminosos",
        "Ofrece una ventilación suave y regulada",
        "Adaptabilidad, se integra fácilmente en diversos ambientes",
      ],
    },
  },
  {
    name: "Ventana oscilobatiente",
    img: ['1', '2', '3', '4'],
    id: 'oscilobatiente',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "oscilobatiente",
    ],
    description:
      "La abertura oscilobatiente combina la funcionalidad de la apertura batiente tradicional con la versatilidad de la apertura oscilante. Puede abrirse hacia adentro como una hoja batiente o inclinarse desde la parte superior tipo banderola para permitir la ventilación controlada sin comprometer la seguridad. Esta tipología es especialmente adecuada para habitaciones que requieren un flujo de aire constante, y que cuando esté cerrada ofrezca gran hermeticidad y seguridad. Admite colocar tela mosquitera en el exterior.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Abertura Oscilobatiente de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera, diseñada para soportar condiciones adversas.",
        },
        {
          title: "Diseño",
          text: "Combina estética contemporánea con versatilidad funcional. ",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación suave y regulada, ideal para mantener un ambiente cómodo.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento, lo que garantiza una larga vida útil.",
        },
        {
          title: "Seguridad",
          text: "Dispone de opciones de cierre multipunto para una mayor seguridad y tranquilidad.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para adaptarse a la estética de cualquier espacio.",
        },
      ],
      minMeasures: "550x550 mm",
      maxMeasures: "1200x1800 mm",
      features: [
        "Modos de apertura, oscilante y batiente.",
        "Ventilación suave y regulada.",
        "Estética moderna con funcionalidad.",
        "Ofrece opciones de cierre multipunto.",
      ],
    },
  },
  {
    name: "Ventana proyectante",
    img: ['1', '2', '3', '4'],
    id: 'proyectante',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "proyectante",
    ],
    description:
      "La abertura proyectante es ideal donde se busca un equilibrio entre ventilación y claridad sin invadir el interior de la habitación. Su diseño permite que la hoja se abra hacia afuera, lo que facilita la ventilación sin comprometer el espacio. Es una excelente opción para áreas donde se requiere una buena circulación de aire, como cocinas y baños.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Ventana Proyectante de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente a la corrosión.",
        },
        {
          title: "Diseño",
          text: "Estilo contemporáneo que agrega sofisticación. Ideal para lugares con limitaciones de espacio.",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación suave y regulada.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Seguridad",
          text: "Opciones de cerraduras avanzadas para mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores.",
        },
      ],
      minMeasures: "550x550 mm",
      maxMeasures: "1200x1800 mm",
      features: [
        "Ventilación suave y regulada.",
        "Estilo contemporáneo.",
        "No requiere espacio adicional para abrirse.",
        "Opciones con cerraduras y pestillos avanzados.",
      ],
    },
  },
  {
    name: "Ventana desplazable",
    img: ['1', '2', '3', '4'],
    id: 'desplazable',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "paralela",
    ],
    description:
      "La abertura desplazable es una solución eficiente para ventilación controlada sobre muros o fachadas vidriadas. La hoja se desplaza hacia al exterior mediante brazos a fricción que le permite controlar de manera precisa la ventilación con un excelente control y seguridad. Son ideales para ventanas en altura, edificios de oficinas. Admite colocar tela mosquitera en el exterior.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Ventanas Desplazables de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Ventilación",
          text: "Permite una ventilación controlada y precisa.",
        },
        {
          title: "Seguridad",
          text: "Diseñada para ofrecer un control seguro, especialmente en edificios en altura.",
        },
        {
          title: "Flexibilidad",
          text: "Admite la instalación de tela mosquitera en el exterior.",
        },
        {
          title: "Diseño",
          text: "Solución eficiente para muros y fachadas vidriadas.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Personalización",
          text: "Disponible en varios acabados y colores para adaptarse a las preferencias estéticas de cada espacio.",
        },
      ],
      minMeasures: "1500x1000 mm",
      maxMeasures: "3000x2350 mm",
      features: [
        "Permiten una ventilación precisa y regulada.",
        "Ideal para edificios en altura.",
        "Admite la instalación de una tela mosquitera.",
        "Eficiente para muros y fachadas vidriadas.",
      ],
    },
  },
  {
    name: "Ventana tipo paño fijo",
    img: ['1', '2'],
    id: 'pañofijo',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.WINDOW_PRODUCT,
      "plegadiza",
    ],
    description:
      "El paño fijo es una solución eficaz para maximizar las vistas panorámicas y la entrada de luz. Aunque no tiene opción de ventilar, este tipo de abertura se utiliza en combinación con otras tipologías para crear diseños personalizados. Los paños fijos son ideales para enmarcar vistas pintorescas y añadir un toque arquitectónico a tu espacio.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Paño Fijo de Aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Maximización de Vistas",
          text: "Ofrece vistas panorámicas sin obstáculos para disfrutar del entorno.",
        },
        {
          title: "Abundante Luz Natural",
          text: "Permite una entrada generosa de luz, mejorando la luminosidad del espacio.",
        },
        {
          title: "Diseño Personalizado",
          text: "Se combina fácilmente con otras tipologías de aberturas para adaptarse a necesidades específicas de diseño.",
        },
        {
          title: "Estilo Arquitectónico",
          text: "Agrega un toque distintivo y elegante a cualquier espacio, mejorando la estética del lugar.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente y duradera.",
        },
        {
          title: "Bajo Mantenimiento",
          text: "Requiere poco mantenimiento para una larga vida útil.",
        },
        {
          title: "Uso Estratégico",
          text: "Se utiliza para enmarcar vistas y maximizar la belleza del entorno.",
        },
      ],
      features: [
        "Ofrece vistas panorámicas sin obstáculos.",
        "Permite una entrada generosa de luz.",
        "Se combina fácilmente con otras tipologías",
        "Añade Estilo Arquitectónico elegante.",
      ],
    },
  },
];

export const doorsData: CatalogData[] = [
  {
    name: "Puerta de rebatir",
    img: ['1', '2', '3', '4'],
    id: 'puertarebatir',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertarebatir",
    ],
    description:
      "La puerta de rebatir combina un diseño clásico con facilidad de uso. Su apertura hacia el interior o exterior brinda un acceso conveniente, y sus hojas sólidas proporciona una sensación de seguridad. Esta tipología es ideal para crear una transición funcional entre el interior y el exterior. Pueden tener una o varias hojas según el vano que se desea cubrir.",
    specs: {
      minMeasures: "1000x2300 mm",
      maxMeasures: "1800x2300 mm",
      description: [
        {
          title: "Tipdo",
          text: "Puertas de rebatir de aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción resistente para una vida útil prolongada.",
        },
        {
          title: "Diseño",
          text: "Adecuado para una variedad de estilos arquitectónicos.",
        },
        {
          title: "Tipo Apertura",
          text: "Ofrece una apertura completa para una transición suave entre espacios.",
        },
        {
          title: "Ventilación",
          text: "Permite un control preciso de la ventilación y la entrada de luz.",
        },
        {
          title: "Mantenimiento",
          text: "Diseño simple que facilita la limpieza y el cuidado.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en una variedad de acabados y colores.",
        },
      ],
      features: [
        "Amplia apertura",
        "Estilo Versátil",
        "Control de Ventilación",
        "Mantenimiento Sencillo",
      ],
    },
  },
  {
    name: "Puerta pivotante",
    img: ['1', '2', '3', '4'],
    id: "puertapivotante",
      filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertapivotante",
    ],
    description:
      "La puerta pivotante es una opción audaz que agrega un toque contemporáneo a las fachadas. Su eje de pivote desplazado permite un giro suave y un estilo distintivo. Esta tipología es perfecta para quienes buscan un diseño único y con la opción de hojas de gran tamaño.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas pivotantes de aluminio.",
        },
        {
          title: "Material",
          text: "Material de Fabricación: Aluminio de alta calidad.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y duradera.",
        },
        {
          title: "Diseño",
          text: "Adecuado para una variedad de estilos arquitectónicos.",
        },
        {
          title: "Tipo Apertura",
          text: "Entrada espaciosa y luminosa.",
        },
        {
          title: "Ventilación",
          text: "Regula la entrada de aire fresco.",
        },
        {
          title: "Mantenimiento",
          text: "Diseño que facilita la limpieza y el cuidado.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en diversos acabados y colores.",
        },
      ],
      features: [
        "Estilo contemporáneo y elegante.",
        "Entrada espaciosa y luminosa.",
        "Regula la entrada de aire fresco.",
        "Construcción robusta y duradera.",
      ],
    },
  },
  {
    name: "Puerta plegadiza",
    id: "puertaplegadiza",
    img: ['1', '2', '3', '4'],
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
      "puertaplegadiza",
    ],
    description:
      "La puerta plegadiza es una solución práctica para espacios reducidos. Su deslizamiento suave y sin obstáculos ahorra espacio y agrega un toque moderno. Esta tipología es especialmente adecuada para áreas donde el espacio es una consideración importante. La Hoja se desplaza de forma lateral sobre un riel superior fijado al muro logrando la apertura sin trazar un barrido de apertura tradicional. Se pueden hacer hojas de tamaño considerable y múltiples diseños.",
    specs: {
      description: [
        {
          title: "Tipo",
          text: "Puertas corredizas colgantes de aluminio.",
        },
        {
          title: "Material",
          text: "Aluminio de alta calidad.",
        },
        {
          title: "Diseño",
          text: "Ideal para lugares con limitaciones de espacio. Crea una transición suave entre espacios interiores y exteriores.",
        },
        {
          title: "Durabilidad",
          text: "Construcción robusta y resistente.",
        },
        {
          title: "Entrada de Luz",
          text: "Maximiza la entrada de luz natural en el interior.",
        },
        {
          title: "Seguridad",
          text: "Cerraduras de alta calidad para una mayor seguridad.",
        },
        {
          title: "Personalización",
          text: "Disponible en diversos acabados y colores.",
        },
      ],
      features: [
        "Estilo contemporáneo y elegante.",
        "Ideal para lugares con limitaciones de espacio.",
        "Crean una transición suave entre espacios interiores y exteriores.",
        "Maximizan la entrada de luz natural en el interior.",
      ],
    },
  },
 
];

export const complementarySystemData: CatalogData[] = [
  // {
  //   name: "Frente Placard",
  //   img: "frenteplacard",
  //   filters: [ProductFathersTypes.CS_TYPES, "frenteplacard"],
  //   specs: {
  //     features: [
  //       "Admite Placas de Madera (Fibrofácil), Espejo y Vidrio.",
  //       "Dos modelos disponibles de Tirador: normal y reforzado.",
  //       "El sistema de apertura corredizo evita la necesidad de mantener despejada el área frontal del Placard para la apertura de las hojas.",
  //     ],
  //   },
  // },
  // {
  //   name: "Tabiques Divisorios",
  //   img: "tabiquesdivisorios",
  //   filters: [ProductFathersTypes.CS_TYPES, "tabiquesdivisorios"],
  //   specs: {
  //     features: [
  //       "Ideal para dividir oficinas",
  //       "Admite Placas de Madera (Fibrofácil) y Vidrio",
  //     ],
  //     description:
  //       "Dos modelos disponibles: <br> Línea Alcemar, con bordes redondeados y terminación de columna mediante tapa de aluminio. <br> Línea Tradicional, bordes rectos y terminación de columna mediante burlete",
  //   },
  // },
  // {
  //   name: "Techo Vidriado",
  //   img: "techovidriado",
  //   filters: [ProductFathersTypes.CS_TYPES, "techovidriado"],
  //   specs: {
  //     features: [
  //       "Acabado anodizado o pintado.",
  //       "Admite vidrio Simple y DVH.",
  //       "Libre escurrimiento en sentido de la pendiente.",
  //       "Sistema compuesto por perfiles de larguero, travesaño y prensa vidrio.",
  //       "Montado sobre estructura portante independiente.",
  //     ],
  //   },
  // },
  {
    name: 'Divisor de oficinas',
    img: ['cerramientosoficinas'],
    id: 'cerramientosoficinas',
    filters: [ProductFathersTypes.CS_TYPES, "cerramientosoficinas"],
    description: 'Usos:',
    specs: {
      description: [
        {
          title: 'Tipo de Producto',
          text: 'Cerramientos de Oficinas de Aluplast.'
        },
        {
          title: '  Composición',
          text: 'Perfiles de aluminio, vidrio policarbonato compacto, MDF.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Montaje modular que permite la creación de espacios flexibles.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Montaje rápido y sencillo sin afectar la operación de la oficina.'
        },
        {
          title: '  Estética Elegante',
          text: 'Diseño moderno y profesional que mejora la imagen corporativa.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Varias opciones de distribución y acabados disponibles.'
        },
        {
          title: '  Control de Calidad',
          text: 'Rigurosos controles de calidad garantizan un producto duradero.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Se adapta a oficinas, salas de reuniones, y espacios de trabajo colaborativo.'
        },
        {
          title: '  Practicidad',
          text: 'Mejora la privacidad y reduce el ruido en entornos de trabajo.'
        }
      ],
      features: [
        'Dividen áreas de trabajo y proporcionan privacidad para reuniones',
        'Optimizan el uso del espacio y brindan privacidad a los usuarios',
        'Separan espacios para presentaciones y discusiones',
        'Facilitan la creación de áreas de trabajo flexibles'
      ]
    }
  },
  {
    name: 'Baranda balcón',
    img: ['1', '2', '3', '4', ],
    id: 'barandabalcon',
    filters: [ProductFathersTypes.CS_TYPES, "barandabalcon"],
    description: 'Usos:',
    specs: {
      description: [
        {
          title: 'Tipo de Producto',
          text: 'Barandas de Balcón de Aluplast.'
        },
        { title: 'Composición', text: 'Perfiles de aluminio y cristal.' },
        {
          title: '  Conexión entre Módulos',
          text: 'Diseño estructural sólido y seguro.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Instalación rápida y segura.'
        },
        {
          title: '  Estética Elegante',
          text: 'Diseño transparente y moderno que mejora las vistas y la estética exterior.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Posibilidad de diferentes estilos y alturas.'
        },
        {
          title: '  Control de Calidad',
          text: 'Resistentes a la intemperie y duraderas.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Ideales para balcones residenciales, comerciales y hotelería.'
        },
        {
          title: '  Practicidad',
          text: 'Proporcionan seguridad sin obstruir las vistas.'
        }
      ],
      features: [
        'Proporcionan seguridad sin obstruir las vistas panorámicas.',
        'Agregan un toque elegante a las áreas de terraza y piscina.',
        'Garantizan la seguridad de los residentes.',
        'Crean espacios al aire libre acogedores.',
      ]
    }
  },
  {
    name: 'Mampara de baño',
    img: ['1', '2', '3', '4', ],
    id: 'mamparadebaño',
    filters: [ProductFathersTypes.CS_TYPES, "mamparadebaño"],
    description: 'Usos:',
    specs: {
      description: [
        { 
          title: 'Tipo de Producto', 
          text: 'Mamparas de Baño de Aluplast.' },
        {
          title: '  Composición',
          text: 'Perfiles de aluminio y vidrio templado.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Sistema de bisagras y cierres precisos.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Fácil instalación sin grandes obras.'
        },
        {
          title: '  Estética Elegante',
          text: 'Mejora la apariencia y funcionalidad del baño.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Opciones de acabado y configuración de puertas.'
        },
        {
          title: '  Control de Calidad',
          text: 'Duraderas y resistentes a la humedad.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Adecuadas para baños residenciales y comerciales.'
        },
        {
          title: '  Practicidad',
          text: 'Facilitan la limpieza y organización del espacio.'
        }
      ],
      features: [
        'Optimizan el espacio y evitan salpicaduras de agua.',
        'Brindan un aspecto elegante y fácil limpieza.',
        'Mantienen la higiene y la seguridad en áreas de ducha.',
        'Agregan un toque de lujo a los baños de relajación',
      ]
    }
  },
  {
    name: 'Techo vidriado',
    img: ['1'],
    id: 'techovidriado',
    filters: [ProductFathersTypes.CS_TYPES, "techovidriado"],
    description: 'Usos:',
    specs: {
      description: [
        { title: 'Tipo de Producto', text: 'Techos Vidriados de Aluplast.' },
        {
          title: '  Composición',
          text: 'Perfiles de aluminio y vidrio laminado.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Sistema de ensamblaje seguro y hermético.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Montaje rápido y sin complicaciones.'
        },
        {
          title: '  Estética Elegante',
          text: 'Proporciona una sensación de amplitud y conexión con el exterior.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Configuraciones personalizables según las necesidades.'
        },
        {
          title: '  Control de Calidad',
          text: 'Resistentes a las inclemencias del tiempo y duraderos.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Ideal para terrazas, patios y áreas de descanso.'
        },
        {
          title: '  Practicidad',
          text: 'Ofrece protección contra los elementos y permite el paso de la luz natural.'
        }
      ]
      ,
      features: [
        'Creen ambientes luminosos y agradables en salas de estar y terrazas.',
        'Ofrecen áreas al aire libre protegidas de las inclemencias del tiempo.',
        'Agregan un toque de elegancia a áreas de piscina y jardines.',
        'Maximizan la entrada de luz en áreas de pasillos y patios.',
      ]
    }
  },
  {
    name: 'Mosquiteros',
    img: ['1', '2'],
    id: 'mosquiteros',
    filters: [ProductFathersTypes.CS_TYPES, ""],
    description: 'Usos:',
    specs: {
      description: [
        { title: 'Tipo de Producto', text: 'Mosquiteros de Aluplast.' },
        {
          title: '  Composición',
          text: 'Perfiles de aluminio y malla de acero o tela.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Diseño ensamblado para una protección eficaz.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Montaje rápido y sin complicaciones.'
        },
        {
          title: '  Estética Elegante',
          text: 'Proporciona una barrera invisible contra insectos.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Varias opciones de color y malla.'
        },
        {
          title: '  Control de Calidad',
          text: 'Duraderos y resistentes a la intemperie.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Adecuados para ventanas y puertas, brindando protección contra insectos.'
        },
        {
          title: '  Practicidad',
          text: 'Mantiene el hogar libre de insectos sin comprometer la circulación de aire.'
        }
      ],
      features: [
        'Protegen dormitorios y áreas de estar de mosquitos y otros insectos.',
        'Mantienen áreas de comedor al aire libre libres de plagas.',
        'Proporcionan comodidad y tranquilidad a los huéspedes.',
        'Garantizan una experiencia.',
      ]
    }
  },
];

// export const closersData: CatalogData[] = [
//   {
//     name: "Piel de vidrio",
//     id: 'pieldevidrio',
//     filters: [ProductFathersTypes.CLOSERS_TYPES, "pieldevidrio"],
//     description: `
//     Nuestro sistema de piel de vidrio es la respuesta ideal para optimizar las envolventes vidriadas de edificios de gran altura, pero su versatilidad lo hace perfecto para proyectos de menor escala e incluso viviendas. Esta estructura innovadora utiliza columnas de aluminio precisamente fijadas en la obra, junto con cuadros de aluminio que albergan vidrios de alta calidad (DVH). Los cuadros pueden instalarse desde el interior o exterior, ofreciendo una vista exterior de vidrio puro sin aluminio visible. Nuestro sistema de piel de vidrio es adaptable para diferentes tipologías de aberturas, ya sea para paños fijos o proyectantes.

//     Aluplast es una empresa con amplia experiencia y conocimientos en sistemas de vidriados envolventes, brindando soluciones tanto para edificios comerciales como residenciales. Nuestro equipo de ingenieros altamente capacitado se encarga de dimensionar perfiles, anclajes, tamaños de paños y las características de vidrios que mejor se ajusten a las condiciones climáticas y de viento de la zona.
//     `,
//     specs: {
//       description: [
//         {
//           title: "Tipo de Producto",
//           text: "Sistema de Piel de Vidrio de Aluplast.",
//         },
//         {
//           title: "Composición",
//           text: "Paneles de vidrio de alta calidad, columnas de aluminio.",
//         },
//         {
//           title: "Diseño Estético",
//           text: "Ofrece una estética moderna y elegante, maximizando la entrada de luz natural.",
//         },
//         {
//           title: "Eficiencia Energética",
//           text: "Vidrios de alto rendimiento que brindan un aislamiento térmico y acústico excepcional.",
//         },
//         {
//           title: "Durabilidad",
//           text: "Construcción resistente que garantiza una larga vida útil con mantenimiento mínimo.",
//         },
//         {
//           title: "Versatilidad de Uso",
//           text: "Adecuado para aplicaciones comerciales y residenciales, adaptándose a proyectos de diferentes escalas.",
//         },
//         {
//           title: "Instalación Profesional",
//           text: "Se recomienda la instalación por expertos para un rendimiento óptimo.",
//         },
//       ],
//       features: [
//         "Ofrece una vista sin obstáculos.",
//         "Se adapta a las necesidades del cliente.",
//         "Valor Estético Superior.",
//         "Eficiencia a Largo Plazo",
//       ],
//     },
//   },
//   {
//     name: "Frente integral",
//     // img: 'frenteintegral',
//     id: 'frenteintegral',
//     filters: [ProductFathersTypes.CLOSERS_TYPES, "frenteintegral"],
//     description:
//       "Esta solución es la elección definitiva para aquellos que desean transformar sus espacios de manera elegante y funcional. Representa la combinación perfecta de diseño moderno y versatilidad, ofreciendo una experiencia única en la integración de espacios interiores y exteriores.",
//     specs: {
//       description: [
//         {
//           title: "Tipo de Producto",
//           text: "Solución de Cerramiento con Frente Integral de Aluminio.",
//         },
//         {
//           title: "Material de Fabricación",
//           text: "Aluminio de alta calidad.",
//         },
//         {
//           title: "Diseño Vanguardista",
//           text: "Aporta un toque moderno y sofisticado a cualquier espacio.",
//         },
//         {
//           title: "Integración de Espacios",
//           text: "Permite la integración perfecta de espacios interiores y exteriores.",
//         },
//         {
//           title: "Amplia Entrada de Luz Natural",
//           text: "Maximiza la entrada de luz, creando espacios luminosos y agradables.",
//         },
//         {
//           title: "Eficiencia Energética",
//           text: "Ofrece un excelente aislamiento térmico, reduciendo los costos energéticos.",
//         },
//         {
//           title: "Durabilidad",
//           text: "Construcción resistente y duradera.",
//         },
//         {
//           title: "Bajo Mantenimiento",
//           text: "Requiere poco mantenimiento para una larga vida útil.",
//         },
//         {
//           title: "Personalización",
//           text: "Disponible en varios tamaños y diseños para adaptarse a las necesidades de diseño de cada proyecto.",
//         },
//         {
//           title: "Fácil Instalación",
//           text: "Se puede instalar de manera eficiente y rápida por profesionales capacitados.",
//         },
//         {
//           title: "Versatilidad de Uso",
//           text: "Adecuado para aplicaciones residenciales y comerciales.",
//         },
//         {
//           title: "Mejora la Conexión Interior-Exterior",
//           text: "Crea una transición fluida y mejora la conectividad de los espacios.",
//         },
//       ],
//       features: [
//         "Diseño Versátil y elegante",
//         "Eficiencia Energética",
//         "Amplia Entrada de Luz Natural",
//         "Solución resistente y estructural",
//       ],
//     },
//   },
//   {
//     name: "Sistema frame",
//     // img: 'courtainwall',
//     id: 'sistemaframe',
//     description: `
//       En la clasificación de muros cortina, presentamos nuestro sistema frame, que consiste en la fabricación previa de módulos en nuestra fábrica y su posterior instalación directa en el sitio de construcción, entre las losas.

//       Estos módulos se conectan entre sí mediante columnas o travesaños "semicompletos" que se ensamblan cuando un módulo se coloca junto a otro. El propósito inicial del sistema de muro cortina fue reducir al mínimo el tiempo requerido para la instalación en el lugar de construcción.
//     `,
//     filters: [ProductFathersTypes.CLOSERS_TYPES, "courtainwall"],
//     specs: {
//       description: [
//         {
//           title: "Tipo de Producto",
//           text: "Sistema Frame de Aluplast.",
//         },
//         {
//           title: "Composición",
//           text: "Módulos prefabricados en nuestra fábrica que se instalan directamente en el sitio de la obra entre las losas.",
//         },
//         {
//           title: "Conexión entre Módulos",
//           text: 'Columnas o travesaños "semicompletos" que se ensamblan al unir módulos.',
//         },
//         {
//           title: "Eficiencia en el Montaje",
//           text: "Reducción significativa del tiempo de montaje en comparación con otros sistemas.",
//         },
//         {
//           title: "Estética Elegante",
//           text: "Agrega una apariencia moderna y elegante al edificio.",
//         },
//         {
//           title: "Flexibilidad de Diseño",
//           text: "Adaptable a diferentes estilos arquitectónicos y necesidades específicas.",
//         },
//         {
//           title: "Control de Calidad",
//           text: "Mayor control de calidad debido a la prefabricación en nuestra fábrica.",
//         },
//         {
//           title: "Aplicaciones Versátiles",
//           text: "Adecuado para una variedad de proyectos arquitectónicos.",
//         },
//         {
//           title: "Practicidad",
//           text: "Simplifica la instalación en obra, lo que se traduce en un proceso más rápido y eficiente.",
//         },
//       ],
//       features: [
//         "Rápida Instalación.",
//         "Diseño Elegante excelente",
//         "Se adapta a diversas necesidades.",
//         "La prefabricación garantiza  calidad.",
//       ],
//     },
//   },
//   {
//     name: "Frente vidriado",
//     // img: 'courtainwall',
//     id: 'frentevidriado',
//     filters: [ProductFathersTypes.CLOSERS_TYPES, "courtainwall"],
//     description:
//       "El sistema de frente vidriado optimiza envolventes vidriadas en edificios de gran altura y también en construcciones más pequeñas, incluso viviendas. Este sistema utiliza columnas de aluminio y cuadros de aluminio con vidrios (o DVH) para crear una envolvente de vidrio puro sin aluminio visible. Ofrece ventanas fijas o proyectantes. En Aluplast somos expertos en sistemas de vidriados envolventes para edificios comerciales, residenciales y viviendas. Nuestro equipo de ingenieros dimensiona perfiles, anclajes y vidrios según las condiciones climáticas y de viento de la zona.",
//     specs: {
//       description: [
//         {
//           title: "Tipo de Producto",
//           text: "Frente Vidriado de Aluplast.",
//         },
//         {
//           title: "Composición",
//           text: "Paneles de vidrio templado y estructura de aluminio de alta calidad.",
//         },
//         {
//           title: "Diseño Estético",
//           text: "Ofrece una apariencia moderna y elegante, maximizando la entrada de luz natural.",
//         },
//         {
//           title: "Eficiencia Energética",
//           text: "Vidrios de alta eficiencia que proporcionan aislamiento térmico y acústico de alto rendimiento.",
//         },
//         {
//           title: "Durabilidad",
//           text: "Construcción resistente que garantiza una larga vida útil y requiere bajo mantenimiento.",
//         },
//         {
//           title: "Versatilidad de Uso",
//           text: "Adecuado para aplicaciones comerciales y residenciales.",
//         },
//         {
//           title: "Montaje Profesional",
//           text: "Instalación por profesionales capacitados para un rendimiento óptimo.",
//         },
//       ],
//       features: [
//         "Máxima Transparencia, vista exterior de vidrio puro sin obstrucciones.",
//         "Resistencia, soporta condiciones climáticas y de viento de manera eficiente.",
//         "Construcción de alta calidad para una larga vida útil.",
//         "Excelente aislamiento térmico y acústico.",
//       ],
//     },
//   },
// ];

export const controlSolar: CatalogData[] = [
  {
    name: "Cortina de enrollar",
    img: ['2B', '1A', '1B', '2A',],
    id: 'cortinadeenrrollar',
    filters: [ProductFathersTypes.SOLAR_CONTROL, "cortinadeenrollar"],
    description:
      "Las cortinas de enrollar son una elección popular para quienes buscan un diseño clásico y funcionalidad práctica. Fabricadas con lama de aluminio tubular, con pequeños calados que permiten regular ventilación y claridad. Estas cortinas se enrollan suavemente mediante sistema de reductor a manivela o bien se automatizan a tecla y/o control remoto.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Cortina de Enrollar de Aluplast.",
        },
        { title: "Composición", text: "Lamas de aluminio tubular." },
        {
          title: "Conexión entre Módulos",
          text: "Sistema de reductor a manivela o automatización con tecla/control remoto.",
        },
        {
          title: "Eficiencia en el Montaje",
          text: "Fácil instalación y configuración.",
        },
        {
          title: "Estética Elegante",
          text: "Diseño clásico que se adapta a diversos entornos.",
        },
        {
          title: "Flexibilidad de Diseño",
          text: "Variedad de colores y tamaños disponibles.",
        },
        {
          title: "Control de Calidad",
          text: "Rigurosos estándares de calidad garantizan un producto confiable.",
        },
        {
          title: "Aplicaciones Versátiles",
          text: "Adecuado para uso en hogares, comercios y más.",
        },
        {
          title: "Practicidad",
          text: "Facilita el control de luz y ventilación.",
        },
      ],
      features: [
        "Diseño Clásico y Funcional",
        "Regulación de Ventilación",
        "Control Remoto Opcional",
        "Versatilidad de Aplicación",
      ],
    },
  },
  {
    name: "Persiana regulable",
    img: ['2B', '3A', '3B', '1A', '1B', '2A', ],
    id: 'persianaregulable',
    filters: [ProductFathersTypes.SOLAR_CONTROL, "persianaregulable"],
    description:
      "La persiana regulable es una solución versátil que permite un control total sobre la cantidad de luz y ventilación sin perder seguridad. Se puede regular la inclinación de las lamas tubulares de aluminio de la persiana según cada necesidad, lo que la convierte en una opción perfecta para habitaciones donde deseas un control solar preciso del ambiente y la privacidad. Se accionan mediante sistema de reductor a manivela o bien se automatizan a tecla y/o control remoto.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Persiana Regulable de Aluplast.",
        },
        { title: "  Composición", text: "Lamas tubulares de aluminio." },
        {
          title: "  Conexión entre Módulos",
          text: "Sistema de reductor a manivela o automatización con tecla/control remoto.",
        },
        {
          title: "  Eficiencia en el Montaje",
          text: "Instalación sencilla y ajuste preciso.",
        },
        {
          title: "  Estética Elegante",
          text: "Proporciona un aspecto moderno y funcional.",
        },
        {
          title: "  Flexibilidad de Diseño",
          text: "Se adapta a la cantidad de luz y privacidad deseada.",
        },
        {
          title: "  Control de Calidad",
          text: "Altos estándares de calidad para un rendimiento óptimo.",
        },
        {
          title: "  Aplicaciones Versátiles",
          text: "Ideal para habitaciones que requieren control solar y privacidad.",
        },
        {
          title: "  Practicidad",
          text: "Facilita la regulación del ambiente interior.",
        },
      ],
      features: [
        "Diseño versátil y clásico.",
        "Excelente aislamiento térmico.",
        "Ahorro de espacio.",
        "Vistas panorámicas.",
      ],
    },
  },
  {
    name: "Celosias con tablilla fija",
    img: ['1', '2', '3', '4'],
    id: 'celosiastablillafija',
    filters: [ProductFathersTypes.SOLAR_CONTROL, "celosiastablillafija"],
    description:
      "Estas celosías con tablilla fija son ideales para aquellos que buscan un equilibrio entre privacidad y entrada de luz. Su diseño de tablillas fijas puede ser ciega o caladas lo cual permite un flujo controlado de aire y claridad natural mientras proporciona una barrera visual. Perfectas para espacios donde no se tiene lugar para taparrollos o se tienen mochetas amplias. se busca un toque de privacidad  y seguridad con un toque de ventilación e iluminación.",
    specs: {
      description: [
        {
          title: "Tipo de Producto",
          text: "Celosías con Tablilla Fija de Aluplast.",
        },
        {
          title: "  Composición",
          text: "Diseño con tablillas fijas, disponibles en versiones ciegas o caladas.",
        },
        {
          title: "  Conexión entre Módulos",
          text: "Tablillas dispuestas para un flujo controlado de aire y luz.",
        },
        {
          title: "  Eficiencia en el Montaje",
          text: "Fácil instalación en espacios reducidos.",
        },
        {
          title: "  Estética Elegante",
          text: "Brinda un toque de privacidad con un diseño atractivo.",
        },
        {
          title: "  Flexibilidad de Diseño",
          text: "Opciones de tablillas para diferentes preferencias estéticas.",
        },
        {
          title: "  Control de Calidad",
          text: "Rigurosos controles aseguran la calidad del producto.",
        },
        {
          title: "  Aplicaciones Versátiles",
          text: "Ideal donde se requiere privacidad con ventilación e iluminación.",
        },
        {
          title: "  Practicidad",
          text: "Solución práctica para espacios compactos.",
        },
      ],
      features: [
        "Control preciso de luz y privacidad.",
        "Eficiente en aislamiento térmico.",
        "Aprovecha la luz natural.",
        "Estilo moderno.",
      ],
    },
  },
  {
    name: "Celosias con tablilla regulable",
    img: ['1', '2', '3', '4'],
    id: 'celosiastablillaregulable',
    filters: [ProductFathersTypes.SOLAR_CONTROL, "celosiastablillaregulable"],
    description:
      "Las celosías con tablilla regulable ofrecen un mayor control sobre la entrada de luz y ventilación aún con las hojas en modo cerrado. Puedes ajustar las tablillas para modular la cantidad de luz y aire según tus preferencias. Esta tipología es especialmente adecuada para áreas donde se requiere flexibilidad en la regulación del ambiente interior sin perder seguridad.",
    specs: {
      description: [
        {
          title: 'Tipo de Producto',
          text: 'Celosías con Tablilla Regulable de Aluplast.'
        },
        {
          title: 'Composición',
          text: 'Tablillas regulables para controlar la entrada de luz y ventilación.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Ajuste de tablillas para un control preciso del ambiente.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Instalación sencilla y versátil.'
        },
        {
          title: '  Estética Elegante',
          text: 'Agrega un toque sofisticado a la fachada o espacio.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Adecuada para áreas que requieren regulación de luz y privacidad.'
        },
        {
          title: '  Control de Calidad',
          text: 'Proceso de fabricación controlado para un rendimiento óptimo.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Perfecta para espacios donde se necesita flexibilidad en la regulación del ambiente interior.'
        },
        {
          title: '  Practicidad',
          text: 'Solución versátil para controlar la entrada de luz y ventilación.'
        }
      ]
      ,
      features: [
        "Entrada de luz controlada.",
        "Privacidad y estética.",
        "Versatilidad arquitectónica.",
        "Instalación sencilla.",
      ],
    },
  },
  {
    name: "Cortavistas",
    id: 'cortavistas',
    filters: [ProductFathersTypes.SOLAR_CONTROL, "cortavistas"],
    description:
      "Las aberturas tipo corta vistas son diseñadas para crear un ambiente más íntimo y protegido. Ideales para balcones y patios , estas aberturas brindan privacidad mientras permiten una entrada controlada de luz y aire. Se pueden realizar con una gran variedad en tamaño y color de perfiles tubos de aluminio, los cuales se pueden colocar vertical u horizontalmente fijado a una estructura soporte.",
    specs: {
      description: [
        { title: 'Tipo de Producto', text: 'Cortavistas de Aluminio.' },
        {
          title: '  Composición',
          text: 'Fabricado con perfiles tubulares de aluminio de alta calidad.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Diseñado con un sistema de fijación sólido para una instalación segura.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Montaje rápido y sin complicaciones.'
        },
        {
          title: '  Estética Elegante',
          text: 'Crea un ambiente íntimo y protegido sin sacrificar la estética.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Puede colocarse de manera vertical u horizontal según las preferencias del cliente.'
        },
        {
          title: '  Control de Calidad',
          text: 'Fabricado con materiales resistentes a la intemperie y bajo estrictos estándares de calidad.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Ideal para balcones y patios, brindando privacidad y control de la entrada de luz y aire.'
        },
        {
          title: '  Practicidad',
          text: 'Agrega un toque de privacidad y seguridad a espacios exteriores mientras permite una ventilación controlada.'
        }
      ],
      features: [
        "Intimidad y protección.",
        "Control de luz y aire.",
        "Versatilidad de diseño.",
        "Instalación vertical u horizontal.",
      ],
    },
  },
  
];

export const windowsFatherData:CatalogData[] = [
  {
    name: 'Blindex acústico',
    img: ['VIDRIOS5b'],
    id: 'blindex-acustico',
    filters: [ProductFathersTypes.WINDOWS, 'blindex-acustico'],
    description: `Los vidrios laminados están compuestos por dos o más capas de vidrio unidas por una capa de película de polivinilo (PVB) que actúa como una barrera protectora. Este diseño mejora la seguridad al mantener el vidrio unido en caso de rotura, lo que reduce el riesgo de lesiones. Los vidrios laminados son ideales para aplicaciones que requieren tanto seguridad como estética, como ventanas y fachadas de edificios.
    
    Blindex Acústico se puede combinar con los diferentes productos Blindex, adaptándose a diversos tipos de clima para ofrecer siempre el mejor rendimiento.

    Para un espacio silencioso, seguro y protegido, elige Blindex Acústico. ¡Disfruta del confort y la tranquilidad que mereces!
    `,
    specs: {

      description: [
        {
          title: 'Máxima aislación acústica:',
          text: 'Disfruta de un ambiente silencioso y libre de ruidos molestos'
        },
        {
          title: 'Evita accidentes: ',
          text: 'Proporciona seguridad adicional en caso de roturas'
        },
        {
          title: 'Protección UV: ',
          text: 'Filtra más del 99% de la radiación UV, protegiendo tu salud y muebles'
        },
      ],
      // features: [
      //   '',
      //   '',
      //   '',
      //   '',
      // ]
    }
  },
  {
    name: 'Vidrio templado',
    id: 'vidriotemplado',
    img: ['20160909142636493'],
    filters: [ProductFathersTypes.WINDOWS, 'vidriotemplado'],
    description: 'Los vidrios templados son una elección ideal para la seguridad y la resistencia en aplicaciones arquitectónicas. Producidos mediante un proceso de calentamiento y enfriamiento controlado, estos vidrios ofrecen una mayor resistencia a los impactos en comparación con los vidrios estándar. Son altamente versátiles y se utilizan en puertas, ventanas, barandas y divisorios, proporcionando una mayor seguridad y durabilidad.',
    specs: {
      description: [
        {
          title: 'Puertas y Ventanas',
          text: 'Proporcionan seguridad y resistencia a impactos accidentales.'
        },
        {
          title: '  Barandas y Barandales',
          text: 'Añaden un toque estético y cumplen con los estándares de seguridad.'
        },
        {
          title: '  Divisiones de Espacios',
          text: 'Se utilizan en particiones interiores para crear áreas separadas.'
        },
        {
          title: '  Fachadas',
          text: 'Ofrecen protección contra condiciones climáticas extremas.'
        }
      ],
      // features: [
      //   'Proporcionan seguridad y resistencia a impactos accidentales.',
      //   'Añaden un toque estético y cumplen con los estándares de seguridad.',
      //   'Se utilizan en particiones interiores para crear áreas separadas.',
      //   'Ofrecen protección contra condiciones climáticas extremas.',
      // ]
    }
  },
  {
    name: 'Vidrio laminado',
    img: ['VIDRIOS5a'],
    id: 'vidriolaminado',
    filters: [ProductFathersTypes.WINDOWS, 'vidriolaminado'],
    description: 'Los vidrios laminados están compuestos por dos o más capas de vidrio unidas por una capa de película de polivinilo (PVB) que actúa como una barrera protectora. Este diseño mejora la seguridad al mantener el vidrio unido en caso de rotura, lo que reduce el riesgo de lesiones. Los vidrios laminados son ideales para aplicaciones que requieren tanto seguridad como estética, como ventanas y fachadas de edificios.',
    specs: {
      description: [
        {
          title: 'Ventanas de Seguridad',
          text: 'Ofrecen protección contra intrusos y reducen el ruido exterior.'
        },
        {
          title: '  Fachadas',
          text: 'Mejoran la seguridad y la estética de los edificios.'
        },
        {
          title: '  Barandas de Balcón',
          text: 'Combina seguridad y diseño en espacios exteriores.'
        },
        {
          title: '  Vidrieras de Tiendas',
          text: 'Proporcionan seguridad y estética en entornos comerciales.'
        }
      ],
      // features: [
      //   '',
      //   '',
      //   '',
      //   '',
      // ]
    }
      
  },
  {
    name: 'Vidrios decorativos VIIO',
    img: ['1'],
    id: 'vidrio-decorativo-viio',
    filters: [ProductFathersTypes.WINDOWS, 'vidriosdecorativos'],
    description: 'Los vidrios decorativos "VIIO" son una elección innovadora para proyectos de diseño interior y arquitectura. Estos vidrios personalizables ofrecen una amplia gama de opciones de diseño, desde patrones geométricos hasta impresiones personalizadas. Combinan la estética con la funcionalidad, permitiendo la creación de espacios únicos y elegantes.',
    specs: {
      description: [
        {
          title: 'Diseño de Interiores',
          text: 'Mejoran la estética de espacios residenciales y comerciales.'
        },
        {
          title: '  Hoteles y Restaurantes',
          text: 'Agregan un toque de lujo y originalidad al diseño interior.'
        },
        {
          title: '  Espacios Públicos',
          text: 'Proporcionan una identidad visual única en áreas de alto tráfico.'
        },
        {
          title: '  Proyectos de Arte',
          text: 'Permiten la creación de instalaciones artísticas y visuales.'
        }
      ],
      // features: [
      //   '',
      //   '',
      //   '',
      //   '',
      // ]
    }
  },
  {
    name: 'Blindex anti robo',
    img: ['VIDRIOS5'],
    id: 'blindex-anti-robo',
    filters: [ProductFathersTypes.WINDOWS, 'vidriosdecorativos'],
    description: `Blindex Anti Robo: Protección Total para Tu Hogar

    El Blindex Anti Robo es un vidrio compuesto por dos vidrios float de 5mm, unidos a una lámina de alta elasticidad, cuatro veces más gruesa que la convencional (1.52mm vs 0.38mm). Este vidrio está diseñado para ofrecer máxima seguridad y protección en tu hogar o negocio.

    Blindex Anti Robo es la solución definitiva para quienes buscan seguridad y tranquilidad sin comprometer el estilo y la elegancia. ¡Protege lo que más importa!
    `,
    specs: {
      description: [
        {
          title: 'Antiintrusión: ',
          text: 'Resistente a intentos de robo y vandalismo.'
        },
        {
          title: ' Evita accidentes:',
          text: ' Proporciona una barrera segura para prevenir lesiones.'
        },
        {
          title: ' Protección UV: ',
          text: 'Filtra el 99% de la radiación UV, protegiendo tu salud y mobiliario.'
        },
        {
          title: 'Mayor aislación acústica:',
          text: ' Disfruta de un ambiente más tranquilo y silencioso.'
        }
      ],
      // features: [
      //   '',
      //   '',
      //   '',
      //   '',
      // ]
    }
  },
  // {
  //   name: 'Blindex energy' YA ETA EN LA BD,
  //   img: ['VIDRIOS5c'],
  //   id: 'blindex-energy',
  //   filters: [ProductFathersTypes.WINDOWS, 'blindex-energy'],
  //   description: `Blindex Energy: Eficiencia Energética y Confort Superior

  //   Blindex Energy es la solución perfecta para los proyectos más exigentes que requieren máxima aislación térmica en unidades de doble vidriado hermético (DVH). Compuesto por un vidrio float incoloro y un float Low-E de baja emisividad, este vidrio está diseñado para optimizar la eficiencia energética y el confort en cualquier espacio.

  //   Blindex Energy es la respuesta integral para quienes buscan eficiencia energética y confort superior en sus proyectos. ¡Aprovecha la tecnología avanzada de Blindex para tu hogar o negocio!
  //   `,
  //   specs: {
  //     description: [
  //       {
  //         title: 'Baja emisividad: ',
  //         text: 'Minimiza la pérdida de calor, manteniendo tu espacio cálido en invierno y fresco en verano.'
  //       },
  //       {
  //         title: ' Eficiencia energética: ',
  //         text: 'Reduce un 70% la transmitancia térmica, ahorrando en costos de energía.'
  //       },
  //       {
  //         title: 'Evita accidentes:',
  //         text: ' Proporciona una capa adicional de seguridad.'
  //       },
  //       {
  //         title: 'Protección UV:',
  //         text: 'Filtra los dañinos rayos UV, protegiendo tus interiores.'
  //       }
  //     ],
  //     features: [
  //       'Mejora el aislamiento sonoro para un ambiente más tranquilo.',
  //       'Al combinar Blindex Energy con Blindex Solar, se logra una filtración aún mayor del calor solar.',
  //     ]
  //   }
  // },
  {
    name: 'Blindex solar',
    img: ['VIDRIOS5d'],
    id: 'blindex-solar',
    filters: [ProductFathersTypes.WINDOWS, 'blindex-solar'],
    description: `Blindex Solar: La Solución Definitiva en Confort y Protección Solar

    Blindex Solar es una línea de vidrios laminados de control solar, diseñada especialmente para superficies que reciben radiación solar directa. Este vidrio reduce significativamente el ingreso de calor y la excesiva luminosidad, mejorando el confort y la eficiencia energética de tu hogar o negocio.

    Disponible en tonos gris y azul reflectivo para edificios comerciales, y en tonos neutro y verde para proyectos residenciales.

    Blindex Solar es la respuesta integral en seguridad y confort, brindando tecnología de punta en vidrios al alcance de tu hogar. ¡Dale a tu espacio la protección y eficiencia que merece!

    Colores: 
    Solar Neutro Light 
    Neutro
    Gris
    Verde
    Azul 
    `,
    specs: {
      description: [
        {
          title: ' Protección solar: Reduce un 70% el ingreso de calor del sol, manteniendo tu espacio fresco.',
          text: 'Minimiza la pérdida de calor, manteniendo tu espacio cálido en invierno y fresco en verano.'
        },
        {
          title: ' Eficiencia energética: ',
          text: 'Reduce un 70% la transmitancia térmica, ahorrando en costos de energía.'
        },
        {
          title: 'Evita accidentes:',
          text: ' Proporciona una capa adicional de seguridad.'
        },
        {
          title: 'Protección UV:',
          text: 'Filtra los dañinos rayos UV, protegiendo tus interiores.'
        }
      ],
      // features: [
      //   'Mejora el aislamiento sonoro para un ambiente más tranquilo.',
      //   'Al combinar Blindex Energy con Blindex Solar, se logra una filtración aún mayor del calor solar.',
      // ]
    }
  },
  {
    name: 'DVH (Doble Vidrio Hermético)',
    img: ['DVH'],
    id: 'vidrio-dvh',
    filters: [ProductFathersTypes.WINDOWS, 'vidrio-dvh'],
    description: `El DVH es la solución perfecta para tus ventanas, ofreciendo comodidad, eficiencia y elegancia. 
    Se trata de un componente prefabricado hecho a medida, compuesto por dos o más vidrios planos, separados por un espaciador y sellados herméticamente. Este diseño crea una cámara aislada con aire deshidratado o gases inertes que mejoran significativamente el rendimiento térmico y acústico.
    
    Seguridad:
    Para superficies mayores a 1.50m², se utilizan vidrios seguros para garantizar la protección de las personas.
    `,
    specs: {
      description: [
        {
          title: 'Aislamiento Térmico Superior:',
          text: 'Mejora el aislamiento térmico del vidrio en más del 100%, manteniendo tu hogar cálido en invierno y fresco en verano.'
        },
        {
          title: ' Aislamiento acústico:',
          text: ' Reduce notablemente el ruido exterior, creando un ambiente más tranquilo y confortable.'
        },
        {
          title: 'Eficiencia Energética:',
          text: ' Disminuye hasta un 70% la pérdida de calor a través del vidrio, ayudándote a ahorrar en costos de climatización.'
        },
        {
          title: 'Mayor Confort:',
          text: 'Elimina el efecto de "muro frío", permitiendo disfrutar de un ambiente acogedor junto a las ventanas.'
        },
        {
          title: ' Prevención de Condensación:',
          text: 'Minimiza la humedad y evita que los vidrios se empañen.'
        },
        {
          title: 'Control Solar:',
          text: 'Con vidrios de color o reflectivos, reduce el resplandor y controla la luz solar, mejorando el confort visual.'
        },
      ],
      // features: [
      //   'Mejora el aislamiento sonoro para un ambiente más tranquilo.',
      //   'Al combinar Blindex Energy con Blindex Solar, se logra una filtración aún mayor del calor solar.',
      // ]
    }
  },
  {
    name: 'prolifit',
    img: ['Prolifit'],
    id: 'vidrio-prolifit',
    filters: [ProductFathersTypes.WINDOWS, 'vidrio-prolifit'],
    description: `
    `,
    specs: {
      description: [

      ],
      // features: [
      //   'Mejora el aislamiento sonoro para un ambiente más tranquilo.',
      //   'Al combinar Blindex Energy con Blindex Solar, se logra una filtración aún mayor del calor solar.',
      // ]
    }
  },
] 

export const garageDoorsData: CatalogData[] = [
  {
    name: 'Porton corredizo riel curvo',
    img: ["1", "2", "3", "4",],
    id: 'portoncorredizorielcurvo',
    filters: [ProductFathersTypes.GARAGE_DOORS, 'corredizorielcurvo'],
    description: '-',
    specs: {
      description: [],
      features: [
        'Un portón curvo que mejora la estética de la propiedad.',
        'Se desliza suavemente sin ocupar espacio adicional.',
        'Montaje rápido y eficiente.',
        'Construido para soportar las condiciones climáticas más exigentes.',
      ]
    }
  },
  {
    name: 'Porton corredizo riel lineal',
    img: ["1", "2", "3", "4",],
    id: 'portoncorredizoriellineal',
    filters: [ProductFathersTypes.GARAGE_DOORS, 'corredizorielineal'],
    description: '-',
    specs: {
      description: [
        {
          title: 'Industrias',
          text: 'Controla el acceso de vehículos de carga y personal.'
        },
        {
          title: '  Centros Logísticos',
          text: 'Facilita la entrada y salida de camiones y mercancías.'
        },
        {
          title: '  Estacionamientos',
          text: 'Optimiza la gestión de entrada y salida de vehículos.'
        },
        {
          title: '  Residencias de Lujo',
          text: 'Añade seguridad y estilo a la entrada principal.'
        }
      ],
      features: [
        'Se desliza a lo largo de un riel lineal, aprovechando al máximo el espacio disponible.',
        'Proporciona un alto nivel de seguridad para la propiedad.',
        'Disponible en diferentes estilos y acabados.',
        'Construcción robusta para una larga vida útil.',
      ]
    }
  },
  {
    name: 'Porton enrollable',
    img: ["1", "2", "3", "4",],
    id: 'portonenrollable',
    filters: [ProductFathersTypes.GARAGE_DOORS, 'portonenrollable'],
    description: '-',
    specs: {
      description: [
        {
          title: 'Comercios',
          text: 'Asegura la protección de locales y tiendas en horario no comercial.'
        },
        {
          title: '  Estacionamientos Subterráneos',
          text: 'Ahorra espacio y controla el acceso.'
        },
        {
          title: '  Residencias',
          text: 'Proporciona seguridad y facilidad de acceso peatonal.'
        },
        {
          title: '  Almacenes',
          text: 'Optimiza la seguridad y la logística de carga y descarga.'
        }
      ],
      features: [
        'Se enrolla de manera compacta para maximizar el espacio disponible.',
        'Ofrece una barrera resistente contra intrusiones.',
        'Mejora la estética de la propiedad con un diseño contemporáneo.',
        'Se abre y cierra de manera suave y sencilla.',
      ]
    }
  },
  {
    name: 'Porton levadizo',
    id: 'portonlevadizo',
    filters: [ProductFathersTypes.GARAGE_DOORS, 'portonelevadizo'],
    description: '-',
    specs: {
      description: [
        {
          title: 'Residencias de Lujo',
          text: 'Añade un toque de elegancia y seguridad a la entrada principal.'
        },
        {
          title: '  Empresas',
          text: 'Controla el acceso vehicular en instalaciones comerciales e industriales.'
        },
        {
          title: '  Instituciones',
          text: 'Proporciona una primera impresión de seguridad y confianza.'
        },
        {
          title: '  Parques Empresariales',
          text: 'Gestiona el acceso de vehículos de forma eficiente.'
        }
      ],
      features: [
        'Adecuado para espacios grandes y pequeños.',
        'Apertura y cierre sin ruido.',
        'Se adapta a diferentes estilos arquitectónicos.',
        'Construcción resistente para una mayor seguridad.',
      ]
    }
  },
  // {
  //   name: "Puerta plegadiza",
  //   img: ['1', '2', '3', '4',],
  //   id: "puertaplegadiza",
  //     filters: [
  //     ProductFathersTypes.GARAGE_DOORS,
  //   ],
  //   description:
  //     "La puerta Plegadiza es una solución práctica para cerrar grandes luces. Su forma de plegarse permite una cantidad de hojas variables según la longitud del vano a cubrir y agrega un toque moderno a la obra. Esta tipología permite el casi 100% de la apertura, ideal para quinchos, galerías.",
  //   specs: {
  //     description: [
  //       {
  //         title: "Tipo",
  //         text: "Puertas plegadizas de aluminio.",
  //       },
  //       {
  //         title: "Material",
  //         text: "Aluminio de alta calidad.",
  //       },
  //       {
  //         title: "Diseño",
  //         text: "Estilo contemporáneo y elegante, Ideal para maximizar el espacio en áreas con limitaciones.",
  //       },
  //       {
  //         title: "Durabilidad",
  //         text: "Construcción resistente y duradera.",
  //       },
  //       {
  //         title: "Entrada de Luz",
  //         text: "Maximiza la entrada de luz natural, creando ambientes luminosos.",
  //       },
  //       {
  //         title: "Transición sin Barreras",
  //         text: "Facilita la conexión entre espacios interiores y exteriores.",
  //       },
  //       {
  //         title: "Mantenimiento",
  //         text: "Requieren poco mantenimiento para una vida útil prolongada.",
  //       },
  //       {
  //         title: "Personalización",
  //         text: "Disponibles en diversos acabados y colores.",
  //       },
  //     ],
  //     features: [
  //       "Amplían galerías y quinchos al conectar espacios.",
  //       "Facilitan la transición suave entre interiores y exteriores.",
  //       "Ofrecen ventilación natural al abrir parcialmente.",
  //       "Aumentan la entrada de luz para un ambiente acogedor.",
  //     ],
  //   },
  // },
];


export const barData: CatalogData[] = [
  {
    name: 'Línea BBA',
    img: ['Baranda BBA P025-02', 'Baranda BBA P028-02'],
    id: 'bba',
    filters: [ProductFathersTypes.CS_TYPES, TypeProduct.BAR_PRODDUCT],
    description: `Baranda BBA, testimonio de elegancia y funcionalidad, diseñado específicamente para satisfacer los estándares más exigentes. 
    La Baranda BBA es la elección ideal para aquellos que buscan la combinación perfecta de estética moderna y funcionalidad duradera.
    `,
    specs: {
      description: [
        {
          title: 'Diseño sofisticado',
          text: 'Ofrece versatilidad, con opciones de pasamanos elíptico o recto, brindando no solo una imagen agradable sino también una sensación táctil excepcional.'
        },
        {
          title: 'Amplia visibilidad de vidrio',
          text: 'Diseñada para resaltar la presencia del vidrio, el pasamanos permite que este nazca dentro de él, maximizando la exposición y la estética.'
        },
        {
          title: 'Compatibilidad con vidrios 3+3 y 4+4',
          text: 'Adaptabilidad para satisfacer diversas necesidades de diseño y seguridad.'
        },
        {
          title: 'Anclaje químico sencillo',
          text: 'Facilitamos la instalación con la posibilidad de anclaje químico a través de inserto metálico sobre el hormigón, asegurando una sujeción robusta y duradera.'
        }
      ],
      features: [
        'Grampa de Fijación a Frente de Losa: Garantiza una fijación segura y estable.',
        'Refuerzo de Parante: Aumenta la resistencia estructural para una mayor durabilidad.',
        'Tapa de Fijación y Soporte Inferior: Detalles que marcan la diferencia en la estética y la funcionalidad.',
        'Bulonería de Acero Inoxidable: Resistencia a la corrosión para una vida útil prolongada',
      ]
    }
  },
  {
    name: 'SP-02',
    img: ['Baranda SP-02'],
    id: 'sp-02',
    filters: [ProductFathersTypes.CS_TYPES, TypeProduct.BAR_PRODDUCT],
    description: `Baranda SP, una obra maestra de diseño moderno que redefine la experiencia visual en cualquier espacio. 
    Esta baranda innovadora prescinde de parantes, ofreciendo una vista panorámica ininterrumpida y convirtiéndose en la elección exclusiva para proyectos modernos de cualquier escala.

    Esta baranda va más allá de los límites convencionales, creando un ambiente moderno y sofisticado. Descubra la elegancia sin restricciones con la Baranda Minimalista SP.
    `,
    specs: {
      description: [
        {
          title: 'Sin parantes',
          text: 'La Baranda Minimalista SP es la esencia de la modernidad, sin parantes que obstruyan la visión, proporcionando una estética limpia y contemporánea.'
        },
        {
          title: 'Fijación inferior para vista panorámica',
          text: 'La fijación inferior permite una vista panorámica, conectando perfectamente el interior y el exterior.'
        },
        {
          title: 'Compatibilidad con vidrios 8+8 y 10+10',
          text: ' Diseñada para aceptar vidrios más gruesos, asegurando una resistencia y seguridad excepcionales.'
        },
        {
          title: 'Fijación mediante Brocas sobre Hormigón',
          text: 'La instalación es rápida y eficiente, asegurando una sujeción sólida y duradera.'
        },
        {
          title: 'Opción de Pasamanos',
          text: 'La Baranda Minimalista SP ofrece la posibilidad de incorporar un pasamanos, brindando una solución versátil y funcional.'
        },
        {
          title: 'Ocultamiento Elegante',
          text: 'Permite ocultar la parte superior del vidrio con el pasamanos, agregando un toque de elegancia al diseño.'
        },
        {
          title: 'Armado por Tramos, Tapas Corridas',
          text: 'Facilitando el proceso de instalación, la Baranda Minimalista SP se arma por tramos, con tapas corridas para un acabado uniforme y pulido.'
        },
      ],
      features: [
        'Diseño Único: La Baranda Minimalista SP es exclusiva y diseñada para proyectos modernos, ofreciendo una estética contemporánea sin igual.',
        'Adaptable a Cualquier Escala: Perfecta para proyectos de cualquier magnitud, desde espacios residenciales hasta grandes proyectos comerciales.',
        'Óptima Relación Costo-Resultado: La Baranda Minimalista SP ofrece una relación costo-resultado excepcional en proyectos de gran envergadura, maximizando el valor y la elegancia sin comprometer el presupuesto.',
      ]
    }
  },
  {
    name: 'SPU-02',
    img: ['Baranda SPU-02'],
    id: 'spu-02',
    filters: [ProductFathersTypes.CS_TYPES, TypeProduct.BAR_PRODDUCT],
    description: `Innovadora Baranda SPU, donde la modernidad se encuentra con la ligereza del diseño. Esta baranda sin parantes redefine el espacio con su presencia sutil y detalles funcionales.

    Descubra la fusión perfecta entre elegancia moderna y ligereza con la Baranda SPU. Su diseño sutil y su funcionalidad excepcional la convierten en la opción perfecta para aquellos que buscan lo mejor en estética y rendimiento.
    `,
    specs: {
      description: [
        {
          title: 'Diseño sin Parantes',
          text: 'La Baranda SPU se caracteriza por su diseño sin parantes, ofreciendo una estética moderna y limpia que transforma cualquier espacio.'
        },
        {
          title: 'Fijación Inferior para Vista Amplia',
          text: 'Con fijación inferior, se logra una conexión fluida entre el interior y el exterior, proporcionando una vista panorámica inigualable.'
        },
        {
          title: 'Compatibilidad con vidrios 8+8 y 10+10',
          text: ' Diseñada para adaptarse a diversos proyectos, asegurando seguridad y resistencia con vidrios más gruesos.'
        },
        {
          title: 'Fijación mediante Brocas sobre Hormigón',
          text: 'La instalación es rápida y eficiente, asegurando una sujeción sólida y duradera.'
        },
        {
          title: 'Opción de Pasamanos',
          text: 'La Baranda Minimalista SPU ofrece la posibilidad de incorporar un pasamanos, brindando una solución versátil y funcional.'
        },
      ],
      features: [
        'Ocultamiento Elegante: Permite ocultar la parte superior del vidrio con el pasamanos, agregando un toque de elegancia al diseño.',
        'Reducida Presencia de Aluminio: Destacándose por su sutileza, la Baranda SPU presenta una presencia de aluminio mínima, resaltando la transparencia del vidrio.',
        'Diseño Ligero y Vanguardista: La Baranda SPU es la elección ideal para proyectos modernos que buscan una presencia sutil y contemporánea.',
        "Versatilidad y Adaptabilidad: Adaptable a distintas escalas y usos, desde espacios residenciales hasta proyectos comerciales de gran envergadura."
      ]
    }
  },
  {
    name: 'SPL-02',
    img: ['Baranda SPL-02'],
    id: 'spl-02',
    filters: [ProductFathersTypes.CS_TYPES, TypeProduct.BAR_PRODDUCT],
    description: `Descubra la Baranda SPL, una manifestación de diseño vanguardista que rompe con lo convencional. Esta baranda sin parantes redefine la elegancia y versatilidad en proyectos de cualquier tamaño.
    Descubra una nueva dimensión de modernidad y elegancia con la Baranda SPL. Su diseño innovador y su facilidad de instalación la convierten en la opción perfecta para destacar en cualquier proyecto.
    `,
    specs: {
      description: [
        {
          title: 'Diseño sin Parantes',
          text: 'La Baranda SPL se caracteriza por su diseño sin parantes, ofreciendo una estética moderna y limpia que transforma cualquier espacio.'
        },
        {
          title: 'Fijación Inferior para vista abierta',
          text: 'Con fijación inferior, logramos una conexión perfecta entre el interior y el exterior, ofreciendo una experiencia visual única.'
        },
        {
          title: 'Compatibilidad con vidrios 8+8 y 10+10',
          text: ' Diseñada para adaptarse a diversos proyectos, asegurando seguridad y resistencia con vidrios más gruesos.'
        },
        {
          title: 'Fijación mediante Brocas sobre Hormigón',
          text: 'La instalación es eficiente y robusta, asegurando una sujeción sólida y duradera.'
        },
        {
          title: 'Opción de Pasamanos',
          text: 'La Baranda Minimalista SPL ofrece la posibilidad de incorporar un pasamanos, brindando una solución versátil y funcional.'
        },
      ],
      features: [
        'Versatilidad sin Límites: Adaptable a diversas escalas, desde espacios residenciales hasta grandes proyectos comerciales.',
        'Diseño Moderno y Exclusivo: La Baranda SPL es la elección ideal para proyectos modernos, ofreciendo un diseño exclusivo y contemporáneo.',
        'Fácil Armado y Colocación: La Baranda SPL se destaca por su proceso de armado y colocación sencillo, garantizando eficiencia sin comprometer la calidad.',
        'Distanciamiento de Fijación: Permite distanciar la fijación, facilitando acercarse al filo de la losa para una integración más estilizada.'
      ]
    }
  },
  {
    name: 'Línea clásica',
    img: ['Baranda Claísica P475 Curvo-02', "Baranda Claísica P479 Recto-02"],
    id: 'barandasclasicas',
    filters: [ProductFathersTypes.CS_TYPES, TypeProduct.BAR_PRODDUCT],
    description: `Baranda Clásica, una fusión perfecta de estética clásica y funcionalidad moderna. Este sistema destaca por su imponente presencia de vidrio y se adapta a proyectos de cualquier escala con facilidad.
    La Baranda Clásica no solo es una elección segura, sino también una declaración de estilo atemporal. Descubra cómo esta baranda puede transformar sus proyectos con su elegancia distintiva.
    `,
    specs: {
      description: [
        {
          title: 'Diseño versátil',
          text: 'Disponible con pasamanos redondo o recto, ambos ofreciendo una impresionante presencia de vidrio que eleva la estética de cualquier espacio.'
        },
        {
          title: 'Fijación Inferior para vista abierta',
          text: 'Con fijación inferior, logramos una conexión perfecta entre el interior y el exterior, ofreciendo una experiencia visual única.'
        },
        {
          title: 'Compatibilidad con vidrios 3+3 y 4+4',
          text: ' Asegura la seguridad y se adapta a diversas necesidades de diseño.'
        },
        {
          title: 'Parante Angosto para Barrotillo',
          text: ' Diseño estilizado que agrega un toque de elegancia y versatilidad para su uso como barrotillo.'
        },
        {
          title: 'Segura y Versátil',
          text: 'Una baranda que combina seguridad y versatilidad, equilibrada estéticamente y adaptable a cualquier proyecto moderno.'
        },
      ],
      features: [
        'Sistema de Armado Sencillo: Una solución fácil de ensamblar para una instalación sin complicaciones.',
        'Adaptable a Diversos Diseños y Escalas: Perfecta tanto para balcones de edificios como para espacios interiores, se adapta a proyectos de cualquier magnitud.',
        'Comodidad en el Uso: Diseñados para brindar comodidad durante el uso, los pasamanos son ergonómicos y de alta calidad.',
        'Estética Atractiva: El diseño del pasamanos complementa la atractiva estética de la baranda, fusionando funcionalidad y estilo.'
      ]
    }
  },
  {
    name: 'Pasamanos barandas sin parantes',
    img: ['Pasamanos Barandas Sin Parantes-02'],
    id: 'pasamanosbarandassinparantes-02',
    filters: [ProductFathersTypes.CS_TYPES, TypeProduct.BAR_PRODDUCT],
    description: `-`,
    specs: {
      
    }
  },
];

export const doorsResalesData: CatalogData[] = [
  {
    name: 'Línea 2000',
    img: ['main', 'avalon', 'camden', 'colonial', 'florencia', 'veronica'],
    id: 'puertaslinea2000',
    filters: [ProductFathersTypes.RESALES, TypeProduct.RESALES_DOOR],
    description: `Puertas de abrir: 
    Hojas: Construidas con bastidor perimetral de madera de pino y panel interior “nido de abejas” de material celulósico. Con tableros de MDF de 5.5 / 9 y 12 mm. de mediana densidad en una sola pieza, moldurados con molduras profundas en ambas caras.
    Doble faz de 43mm de espesor. 
    
    Marcos: De chapa DD Nº18, o madera. 
    
    Cierres: 
    Cerraduras “Kallay” en puertas con paneles de 12mm. 
    Cerradura común en puertas con paneles de 9mm.
    Bisagras pomeja con 3 tornillos del tipo zincado o bronce. 
    
    Opciones: Marcos preparados para tabiquería durlock únicamente con marcos de chapa. Hojas tratadas con 3 manos de base blanca, listas para su acabado con pintura de color a eleccion. Puertas dobles en todos los modelos y en todas las medidas, solamente para tabiques de 10 o 15 cm. 
    
    Puertas de embutir: 
    Hojas: Igual a las puertas de abrir. 
    
    Marcos: Marco y nicho de chapa DD Nº18 revestido con metal desplegado o madera. 
    
    Cierres: cerraduras y cubetas embutidas. 
    
    Rodamientos: con 2 carros de 2 ruedas de nylon. 
    
    Opcionales: Marcos preparados para tabiquería Durlock, únicamente con marcos de chapa. Marcos revestidos con madera solamente para tabiques de 12 y 15 cm. Puertas dobles en todos los modelos y en todas las medidas, solamente para tabiques de 10 o 15cm. 
    `,
    
  },
  {
    name: 'Línea Elite',
    img: ['02', '01', '03', '05', '04', '06', 'puerta haya', 'VISON'],
    id: 'puertaslineaelite',
    filters: [ProductFathersTypes.RESALES, TypeProduct.RESALES_DOOR],
    description: `Nuevas puertas de interior listas y terminadas para instalar en seco. 

    -Libre de mantenimiento 
    -Fácil instalación 
    -Kit de contramarco regulable 
    -Burlete con aislacion acustica 
    -Cerradura reforzada 
    -No requieren ser pintadas. 


    Puertas de Abrir 
    Hojas: Puertas construidas con bastidor perimetral de madera estacionada de pino clear, y panel interior en nido de abeja de material celulósico. Emplacadas con tableros de fibra de madera, (MDF de 5.5mm) de mediana densidad, en una sola pieza. 
    
    Marcos: Marco de pino Finger Foliado 1. ½ pulgada 
    Contramarco regulable
    Burlete termoacústico 
    
    Cierre: Cerradura reforzada 
    
    Opcionales: Marcos preparados para tabiquería Durlock.
    
    Puertas de Embutir 
    Hojas: Puertas construidas con bastidor perimetral de madera estacionada de pino clear, y panel interior en nido de abeja de material celulósico. Emplacadas con tableros de fibra de madera, (MDF de 5.5mm) de mediana densidad, en una sola pieza. 
    
    Marcos: Marco de pino Finger Foliado 1. ½ pulgada 
    Contramarco regulable
    Burlete termoacústico 
    
    Cierre: Cerraduras y cubetas embutidas 
    
    Rodamientos: Con 2 carros de 2 ruedas de nylon. 
    
    Opcionales: Marcos preparados para tabiqueria Durlock 
    
    Medidas exteriores: 
    Anchos: 67cm, 77cm, 92cm y 97cm 
    Altos: 204cm, 220cm, 230cm, 240cm 
    `,
  },
  {
    name: 'Línea 2006',
    img: ['main'],
    id: 'puertaslinea2006',
    filters: [ProductFathersTypes.RESALES, TypeProduct.RESALES_DOOR],
    description: `Puertas de abrir: 

    Hojas: Construidas con bastidor perimetral de madera de pino clear estacionada y panel interior “nido de abejas” de material celulosico. Emplacadas en MDF de 5.5mm. Acabados en MDF para pintar o enchapadas para lustrar con sabugueiro, cedrillo, cerejeira o caoba. En doble faz de 43mm de espesor. 
    Emplacadas con buñas horizontales y verticales. Mod Americana 2 (con insertos de aluminio). 
    
    Marcos: de chapa DD Nº18, o madera. 
    
    Cierres: Cerradura común y bisagras pomela con 3 tornillos del tipo zincado o bronce. 
    
    Opcionales: Marcos preparados para tabiquería Durlock únicamente con marcos de chapa. 
    
    Puertas de embutir: 
    
    Hojas: Construidas con bastidor perimetral de madera de pino estacionada y panel interior “nido de abejas” de material celulósico. Emplacadas en MDF de 5.5mm. Acabados en MDF para pintar o enchapadas para lustrar con sabugueiro, cedrillo, cerejeira o caoba. En doble faz de 43mm de espesor. 
    Emplacadas con buñas horizontales y verticales. Mod Americana 2 (con insertos de aluminio). 
    
    Marcos: Marco y nicho de chapa Nº18 revestido con metal desplegado o madera. 
    
    Cierres: Cerradura y cubetas embutidas. 
    
    Rodamientos: Con 2 carros de 2 ruedas de nylon. 
    
    Opcionales: Marcos preparados para tabiquería Durlock únicamente con marcos de chapa. Marcos revestidos con madera solamente para tabiques de 12 y 15 cm. 
    `,
  },
  {
    name: 'Línea F30',
    img: ['sofia', 'monica', 'sofia blanca'],
    id: 'puertaslineaf30',
    filters: [ProductFathersTypes.RESALES, TypeProduct.RESALES_DOOR],
    description: `El nuevo modelo F-30 Resistente al fuego, ha sido ensayado por el INTI conforme a las normativas vigentes, arrojando excelentes resultados en estabilidad mecánica y estanqueidad a las llamas, sin emisión de gases inflamables, demostrando que es una excelente solución y un diferencial en calidad, con tecnología de punta y un concepto industrial a la vanguardia en puertas. 

    -Mayor aislación térmica 
    -Mayor aislación acústica
    -Alta resistencia a los impactos 
    -Precisión en el espesor 
    -Reducción de peso 
    -Mayor estabilidad 
    -Con tablero tubular de 38mm 
    Resistentes al fuego. 

    Puertas de Abrir: 
Hojas:  Construidas con bastidor de madera semi-dura, relleno ignífugo, dos tapas de MDF 5.5mm y herrajes. Puerta a una hoja de abrir simple contacto. 

Marcos: Marco de chapa 18, bisagra munición con burlete intumescente. 

Cierres: Cerradura de seguridad, Euro + Cilindro 

Opciones: Marcos preparados para tabiquería Durlock, únicamente con marcos de chapa. 

Espesor y medidas: 
Espesor: 49mm
Medidas exteriores: 980mm / 2040mm 
Peso: aprox. 17kg/m 
    `,
  },
  {
    name: 'Línea Masonite',
    img: ['mariel', 'camden'],
    id: 'puertaslineamasonite',
    filters: [ProductFathersTypes.RESALES, TypeProduct.RESALES_DOOR],
    description: `
    Puertas de abrir:

    Hojas: Construidas con bastidor de Pino Clear estacionado y panel interior “nido de abejas” de material celulosico y emplacadas con paneles moldeados en HDF elaborados con fibras seleccionadas de las mejores maderas y procesadas con la tecnología más avanzada. Tableros con molduras profundas y superficies texturadas. Terminación prepintadas, listas para su acabado con laca o pintura de color a eleccion. Doble faz de 43mm de espesor. 

    Marcos: De chapa DD Nº18,22,24 o madera. 

    Cierres: Cerradura común y bisagras pomela de 3 tornillos del tipo zincado o bronce. 

    Opcionales: Marcos preparados para tabiquería Durlock, únicamente con marcos de chapa. Puertas dobles en todas las medidas para tabiques de 10 o 15 cm. 

    Puertas de embutir: 

    Hojas: puertas de abrir.

    Marcos: Marco y nicho de chapa DD Nº18 revestido con metal desplegado o Madera. 

    Cierres: Cerraduras y cubetas embutidas. 

    Rodamientos: De nylon a ruleman que permiten el mejor y más silencioso deslizamiento. 

    Opcionales: Marcos revestidos en madera, solamente para tabiques de 12 y 15 cm. 
    `,
  },
];

export const bathroomPartitionData: CatalogData[] = [
  {
    name: 'Linea 1000/Panel',
    img: ['Panel 1000', 'Panel 1000 brazos rectos', 'Panel 1010 Barral Toallero'],
    filters: [ProductFathersTypes.RESALES, TypeProduct.BATHROOM_PARTITION_PRODUCT],
    id: 'mamparalinea1000',
    description: `Paño fijo de cierre parcial del espacio de ducha.
    Moderno, económico y seguro.
    Instalación rápida y sencilla. 
    La ausencia total de parantes confiere una gran sensación de amplitud. 
    
    Medidas: Se fabrican en medida estándar, aunque a pedido se pueden hacer medidas especiales. 
    
    
    Cristales: Templado de seguridad, espesor 8mm. 
    Transparentes: incoloros, gris y bronce 
    Opacos: Satén, Esmerilado, Pacific y Dreamline. 
    
    
    Perfiles: Aluminio anodizado: Plata, Acero mate, Negro, Blanco y Oro. 
    
    
    Modelos:
    
    1000 - Panel: 
    
    1) 1000 - Panel: 
    Base: 800mm
    Altura: 1600mm / 1900mm 
    
    2) 1010 - Panel punta curva: 
    Base: 800mm
    Altura 1600mm / 1900mm
    `
  },
  {
    name: 'Linea 2000/Rebatible Pivot',
    img: ['2010', 'Rebatible Pivot 2000', 'Rebatible Pivot 2200', 'rebatiblepivotpar2100', 'rebatiblepivotparptared2110'],
    filters: [ProductFathersTypes.RESALES, TypeProduct.BATHROOM_PARTITION_PRODUCT],
    id: 'mamparalinea2000',
    description: `Hoja abatible de cierre parcial con bisagra corrida de aluminio.
    Simple, práctica y segura. 
    Instalación rápida y sencilla. 
    Apertura hacia adentro y hacia afuera (-90º/0º/+90º) 
    Con exclusivo perfil telescópico para regulación de falsa escuadra. 
    
    Medidas: Se fabrican en medida estándar, aunque a pedido se pueden hacer medidas especiales. 
    
    Cristales: Templado de seguridad con espesor de 6mm para medidas hasta 1410mm de altura y 8mm para medidas mayores. 
    Tipos de cristales: 
    Transparentes: incoloros, gris y bronce 
    Opacos: Saten, Esmerilado, Pacific y Dreamline. 
    Serigrafias: Puntos. Franjas y Cuadros. 
    
    Perfiles: Aluminio anodizado: Plata, Acero mate, Negro, Blanco y Oro
    
    Modelos: 
    
    
    2000 - Rebatible Pivot:
    
    1) 2000-Rebatible pivot: 
    Base 850mm
    Altura: 1410 / 1820mm 
    
    2) 2010 - Rebatible pivot punta curva: 
    Base: 850mm
    Altura: 1410 / 1820mm 
    
    2100-Rebatible Pivot Par 
    
    1) 2100-Rebatible Pivot 
    Base:1000mm 
    (Hoja de 700mm / Fijo 300mm) 
    Altura: 1410 / 1820mm 
    
    2) 2110-Rebatible Pivot Par Punta Curva
    Base: 1000mm 
    (Hoja 700mm / Fijo 300mm) 
    Altura: 1410 / 1820mm 
    
    2200-Rebatible Pivot forma 
    Base: 950mm
    Altura: 1410mm 
    
    `
  },
  {
    name: 'Linea 3000/Rebatible Bolt',
    img: ['Rebatible Bolt Forma 3100 con brazo', 'rebatiblebolt3000conbrazo', 'Rebatible Bolt pta curva 3110 con brazo'],
    filters: [ProductFathersTypes.RESALES, TypeProduct.BATHROOM_PARTITION_PRODUCT],
    id: 'mamparalinea3000',
    description: `Hoja rebatible de cierre parcial con bisagra tomada a paño fijo lateral. 
    Elegante, práctica y decorativa. 
    Adaptable a falsas escuadras mediante tornillos reguladores. 
    Apertura hacia adentro y hacia afuera (-90º/0º/+90º) 
    Con exclusivo zócalo que contribuye a la estanqueidad. 
    
    Medidas: Se fabrican en medida estándar, aunque a pedido se pueden hacer medidas especiales. 
    
    Cristales: templado de seguridad de espesor 8mm.
    Transparentes: Incoloro, Girs y Bronce
    Opacos: Satén, Esmerilado, Pacific y Dreamline
    
    Perfiles y herrajes: Plata, Acero mate, Negro y oro. 
    
    Modelos:
    
    
    3100-Rebatible Bolt 
    
    
    1) 3100 - Rebatible Bolt 
    Base: 1000mm 
    (Hoja 600mm / Fijo 400mm) 
    Altura: 1430 / 1850mm 
    
    2) 3110 - Rebatible Bolt Punta Curva
    Base: 1000mm
    (Hoja 600mm / Fijo 400mm) 
    Altura: 1430 / 1850mm 
    
    3200-Rebatible Bolt Forma 
    Base: 1000mm 
    (Hoja 710mm / Fijo 290mm) 
    Altura: 1430mm 
    `
  },
  {
    name: 'Linea 4000/Box Puerta corrediza',
    img: ['4000-B', '4200-A', 'Box Angular 4200-D Arenado 1 franja', 'Box Esquinero 4100', 'Box Frontal 4000-A', 'Box Frontal 4000-D'],
    filters: [ProductFathersTypes.RESALES, TypeProduct.BATHROOM_PARTITION_PRODUCT],
    id: 'mamparalinea4000',
    description: `Puertas corredizas y paños fijos.
    Deslizamiento suave y silencioso 
    Brindan gran sensación de amplitud debido a la ausencia de parantes verticales.
    El monorriel superior es compacto y de pequeñas dimensiones. 
    El zócalo inferior sin canaletas evita la acumulación de suciedad. 
    Presenta gran rigidez estructural. 
    
    Medidas: Se fabrican en medida estándar, aunque a pedido se pueden hacer medidas especiales. 
    
    Cristales: templado de seguridad de espesor 8mm.
    Transparentes: Incoloro, Gris y Bronce
    Opacos: Satén, Esmerilado, Pacifi y Dreamline
    
    Perfiles: Plata, Acero mate, Negro y oro. 
    
    Modelos: 
    
    4000-BOX FRONTAL 
    
    1) 4000-A
    Base: 1000 a 1600mm 
    Altura: 1600 / 1900mm 
    
    2) 4000-B 
    Base: 1600 a 2000mm 
    Altura: 1600 / 1900mm 
    
    3) 4000-C
    Base: 1300 a 1800mm 
    Altura: 1600 / 1900mm 
    
    4) 4000-D
    Base: 1400 a 2500mm
    Altura: 1600 / 1900mm   

    ---------------------------

    4200-BOX ANGULAR 

    1) 4200-A 
    Base: 1000 a 1600 x 700mm
    Altura: 1600 / 1900mm 

    2) 4200-B
    Base: 1600 a 2000 x 700mm
    Altura:1600 / 1900mm 

    3) 4200-C
    Base: 1300 a 1800mm x 700mm 
    Altura: 1600 / 1900mm 

    4) 4200-D
    Base: 1400 a 2500 x 700mm 
    Altura: 1600 / 1900mm 

    ---------------------------

    4100-BOX ESQUINERO
    Base: 700X700 a 1200X1200 mm 
    Altura: 1900mm  

    `
  },
  {
    name: 'Linea 5000/Open Pivot',
    img: ['5000-A', '5000-C', '5100-A', '5200-D', 'Open Pivot 5000-B', 'Open Pivot Esquinero 5200-B', 'Open Pivot Esquinero 5200-B con barral y esm 3 fjas', 'Open Pivot Esquinero 5200-C'],
    filters: [ProductFathersTypes.RESALES, TypeProduct.BATHROOM_PARTITION_PRODUCT],
    id: 'mamparalinea5000',
    description: `Compuestas por hojas abatibles con bisagra corrida de aluminio y paños fijos. 
    Con exclusivo perfil telescópico para regulación de falsa escuadra. 
    Cierre magnético corrido.
    Posibilidad de aperturas hacia adentro o hacia afuera. 
    
    Medidas: Se fabrican a medidas dentro del rango especificado para cada modelo. 
    
    
    Cristales: Templado de seguridad de 8mm. 
    Transparentes: Incoloro, Gris y Bronce. 
    Opacos: Satén, Esmerilado, Pacific y Dreamline. 
    
    Perfiles: Aluminio anodizado: Plata, Acero mate, Negro, Blanco y Oro. 
    
    Modelos:
    
    5000- Open Pivot 1 Puerta 
    
    5000-A
    Base: 500 a 870 mm
    Altura: 1850mm 
    
    5000-B
    Base: 750 a 1000mm 
    Altura:1850mm 
    
    5000-C
    Base:750 a 1000mm 
    Altura: 1850mm 
    
    5000-D
    Base: 1000 a 1600mm 
    Altura: 1850mm
    5100 - Open Pivot 2 Puertas 

    5100-A
    Base:750 a 1000mm 
    Altura: 1850mm 

    5100-B 
    Base: 1000 a 1600mm 
    Altura: 1850mm 

    ------------------------------

    5200-Open Pivot Esquinero 

    5200-A
    Base: 700X700 a 900X900 mm 
    Altura: 1850mm 

    5200-B
    Base:700X700 a 1200X1200 mm 
    Altura: 1850mm 

    5200-C
    Base: 700X700 a 1200X1200mm 
    Altura: 1850mm 

    5200-D
    Base: 700X700 a 1200X1200 mm
    Altura: 1850mm 

    ------------------------------

    5300-Open Pivot Corner 

    5300-A
    Base:700X700 a 900X900 mm
    Altura:1850mm 
    `
  },
  {
    name: 'Linea 6000/Open Bolt',
    img: ['6200-G', '6200-H', 'Open Bolt 6000-C', 'Open Bolt 6000-D', 'Open Bolt Esquinero 6200-D'],
    filters: [ProductFathersTypes.RESALES, TypeProduct.BATHROOM_PARTITION_PRODUCT],
    id: 'mamparalinea6000',
    description: `Compuestas por hojas abatibles con bisagras y paños fijos. 
    Elegante bisagra con traba -90º / 0º / +90º 
    Cierre magnético corrido 
    Posibilidad de aperturas de puerta hacia adentro o hacia afuera 
    El zócalo inferior sin canaletas evita la acumulación de la suciedad. 
    Adaptable a falsas escuadras mediante tornillos reguladores. 
    
    Medidas: Se fabrican a medida dentro del rango especificado para cada modelo. 
    
    Cristales: Templado de seguridad de espesor 8mm 
    Transparentes: Incoloro, Gris y Bronce. 
    Opacos: Saten, Esmerilado, Pacific y Dreamline 
    
    Perfiles: Aluminio anodizado: Plata, Acero mate, Negro y Oro. 
    
    Modelos: 
    
    6000-Open Bolt 1 Puerta
    
    
    6000-C
    Base: 750 a 1000mm 
    Altura: 1850mm 
    
    6000-D
    Base: 1000 a 1600mm 
    Altura: 1850mm 
    
    -----------------------------------

    6100- Open Bolt 2 Puertas 

    6100-B
    Base: 1000 a 1600mm 
    Altura: 1850mm 
    
    -----------------------------------

    6200-Open Bolt Esquinero: 

    6200-G
    Base: 700X700 a 900X900 mm 
    Altura: 1850 mm 

    6200-H
    Base: 700X700 a 1200X1200 mm
    Altura: 1850mm 

    6200-C
    Base: 700X700 a 1200X1200mm 
    Altura: 1850mm 

    6200-D
    Base: 700X700 a 1200X1200mm 
    Altura: 1850mm 

    -----------------------------------

    6300-Open Bolt Corner 

    6300-A
    Base:700X700 a 900X900 mm
    Altura:1850mm 
    `
  },
  {
    name: 'Linea 7000/Steel One',
    img: ['7000-A', 'Steel One Angular 7200-A', 'Steel One Esquinero 7300', 'Steel One Frontal 7000-D'],
    filters: [ProductFathersTypes.RESALES, TypeProduct.BATHROOM_PARTITION_PRODUCT],
    id: 'mamparalinea7000',
    description: `Puertas corredizas y paños fijos con elegantes herrajes a la vista de acero inoxidable. 
    Deslizamiento suave y silencioso. 
    Brindan gran sensación de amplitud debido a la ausencia de parantes verticales. 
    El zócalo inferior sin canaletas evita la acumulación de suciedad. 
    Steel one está a la vanguardia en el diseño de mamparas para baños. 
    
    Medidas: se fabrican a medida dentro del rango especificado para cada modelo. 
    
    Cristales: Templado de seguridad espesor de 8mm 
    Transparentes: Incoloro, Gris y bronce 
    Opacos: Saten,Esmerilado, Pacific y Dreamline 
    
    Herrajes: Acero inoxidable 304 mate. 
    
    Modelos:
    
    7000-Steel One Frontal 
    
    7000-A
    Base: 1000 a 1600mm 
    Altura: 1600 / 1900mm 
    
    7000-B
    Base: 1600 a 2000mm 
    Altura: 1600 / 1900mm 
    
    7000-C
    Base: 1300 a 2000mm 
    Altura: 1600 / 1900mm 
    
    7000-D
    Base: 1400 a 2000mm 
    Altura: 1600 / 1900mm 

    -----------------------------

    7100- Steel One Esquinero 

    7100
    Base: 700x700 a 1000x1000 mm 
    Altura: 1600 / 1900mm     

    -----------------------------

    7200-Steel one Angular 

    7200-A
    Base: 1000 a 1600 X 700mm 
    Altura: 1600/1900mm 

    `
  },
  {
    name: 'Linea 8000/Espacio',
    img: ['Espacio 8100-D'],
    filters: [ProductFathersTypes.RESALES, TypeProduct.BATHROOM_PARTITION_PRODUCT],
    id: 'mamparalinea8000',
    description: `
    Las mamparas Espacio inauguran un nuevo concepto: La zona de ducha. 
    Divididas en dos espacios, una zona húmeda de ducha y una de secado. 
    Compuesta por paños fijos y aletas abatibles, anclados mediante elegantes brazos y barrales metálicos. 
    Sus líneas minimalistas y su elevado diseño crean un espacio de vanguardia. 

    Medidas: Se fabrican a medida dentro del rango especificado. 

    Cristales: Templado de seguridad de 8mm. 
    Transparentes: Incoloro, Gris y Bronce. 
    Opacos: Saten, Esmerilado, Pacific y Dreamline. 

    Perfiles: Aluminio anodizado: Plata, Acero mate y Negro. 

    Modelos: 


    8100- Espacio Recta

    8100-A
    Base: 1500X700 mm 
    Altura: 1900mm 

    8100-B 
    Base: 1500X700mm 
    Altura: 1900mm 

    8100-C 
    Base: 1500X700mm 
    Altura: 1900mm 

    8100-D 
    Base: 1500X700mm
    Altura: 1900mm 
    `
  },
  {
    name: 'Linea 9000/MEKA',
    img: ['9000-C', '9200-A', 'Meka Angular 9200-A', 'Meka Frontal 9000-A', 'Meka Frontal 9000-D'],
    filters: [ProductFathersTypes.RESALES, TypeProduct.BATHROOM_PARTITION_PRODUCT],
    id: 'mamparalinea9000',
    description: `Puertas corredizas y paños fijos con elegantes herrajes a la vista. 
    Deslizamiento suave y silencioso. 
    Brindan gran sensación de amplitud debido a la ausencia de parantes verticales. 
    El zócalo inferior sin canaletas evita la acumulación de suciedad. 
    Un concepto moderno e innovador que le confiere al baño un toque de vanguardia. 
    
    Medidas: Se fabrican a medida dentro del rango especificado en cada modelo. 
    
    Cristales: Templado de seguridad, espesor de 8mm. 
    Transparentes: Incoloro, Gris y Bronce. 
    Opacos: Saten, Esmerilado, Pacific y Dreamline. 
    
    Perfiles y herrajes: Plata, Acero mate y Negro. 
    
    Modelos: 
    
    9000-Meka Frontal 
    
    9000-A
    Base: 1000 a 1600 mm 
    Altura: 1600 / 2000 mm 
    
    9000-B 
    Base: 1600 a 2000 mm 
    Altura: 1600 / 2000 mm 
    
    9000-C 
    Base: 1300 a 1800 mm 
    Altura: 1600 / 2000 mm 
    
    9000-D
    Base: 1400 a 2500 mm 
    Altura: 1600 / 2000 mm 

    -----------------------------------

    9200 - Meka Angular 

    9200-A 
    Base: 1000 a 1600 x 700mm 
    Altura: 1600 / 2000 mm 

    9200-B
    Base: 1600 a 2000 x 700mm 
    Altura: 1600 / 2000 mm 

    9200-C 
    Base: 1300 a 1800 x 700mm 
    Altura: 1600 / 2000 mm 

    9200-D
    Base: 1400 a 2500 x 700mm 
    Altura: 1600 / 2000mm 
    `
  },
  {
    name: 'Linea 5500/Open plegadiza',
    img: ['5500-C', 'Open Pivot Plegadiza 5500 abierta', 'Open Pivot Plegadiza 5500 cerrada'],
    filters: [ProductFathersTypes.RESALES, TypeProduct.BATHROOM_PARTITION_PRODUCT],
    id: 'mamparalinea5500',
    description: `Dos hojas plegadizas con bisagra corrida de aluminio a la pared y dos bisagras entre hojas de acero inoxidable. 
    Especialmente pensada y diseñada para espacios de ducha de reducidas dimensiones, donde es imposible instalar una puerta de abrir. 
    Con exclusivo perfil telescópico para regulación de falsa escuadra. 
    Posee un zócalo guía sin ranura superior para evitar la acumulación de suciedad. 
    
    Medidas: Se fabrican a medida dentro del rango especificado para cada modelo. 
    
    Cristales: Templado de seguridad, espesor de 8mm 
    Transparentes: Incoloro, Gris y Bronce 
    Opacos: Satén, Esmerilado, Pacific y Dreamline
    
    Perfiles y Herrajes: Plata 
    
    Modelos:
    
    5500 - Open Plegadiza 
    
    5500-A
    Base: 800 a 1100 mm 
    Altura: 1850 mm 
    
    5500-B 
    Base: 1000 a 1500 mm 
    Altura: 1850mm 
    
    5500-C
    Base: 1000 a 1500 x 700mm 
    Altura: 1850mm 
    `
  },
];

export const resaleCurtainsData: CatalogData[] = [
  {
    name: 'Cortinas celulares',
    img: ['Sunset_Celulares', 'Sunset_Celulares_2', 'Sunset_Celulares_3'],
    id: 'cortinascelulares',
    filters: [ProductFathersTypes.RESALES, TypeProduct.CURTAINS],
    description: `Las cortinas celulares se destacan por su tela con un exclusivo diseño de celdas, que permite una alta protección térmica y control de la acústica.Permite reducir la pérdida energética en el hogar hasta un 50%, según el tejido. 
    Las telas celulares están disponibles en 10mm y 20mm. Gracias a su composición, 100% poliéster, la tela repele el polvo evitando que se acumule en sus pliegues. 
    
    Niveles de opacidad: 
    1- Translucido 
    2- Semi-Translúcido 
    3- Semi-Opaco 
    4- Opaco 
    
    Accionamientos: 
    1-Manual (Top-Down ; Top-Down Bottom-Up y Duolite)
    2- EasyRise 
    3- Motorizado 
    `
  },
  {
    name: 'Cortinas enrollables',
    img: ['Sunset_Enrollables_Black_Out', 'Sunset_Enrollables_Black_Out1'],
    id: 'cortinasenrollables',
    filters: [ProductFathersTypes.RESALES, TypeProduct.CURTAINS],
    description: `Las cortinas enrollables ofrecen un sistema de control superior, de alta calidad, durabilidad y muy fácil instalación.Ofrece un hardware excelente y un inigualable abanico de telas que proveen las soluciones ideales para el control de la luz y la temperatura de cualquier ambiente. 
    Telas: Screen, Black Out y Decorativas. 
    
    Niveles de opacidad: 
    1- Translucido 
    2- Semi-Translúcido 
    3- Semi-Opaco 
    4- Opaco 
    
    Accionamientos: 
    Sistema manual (sistema de cadenas)
    Sistema motorizado 
    `
  },
  {
    name: 'Cortinas enrollables duo',
    img: ['Sunset_Enrollables_Duo', 'Sunset_Enrollables_Duo_1', 'Sunset_Enrollables_Duo_2', 'Sunset_Enrollables_Duo_3',],
    id: 'cortinasenrollablesduo',
    filters: [ProductFathersTypes.RESALES, TypeProduct.CURTAINS],
    description: `La cortina con sus segmentos alternados opacos y traslúcidos, crea una atmósfera armónica y funcional, sin perder de vista la elegancia. Acorde a la arquitectura contemporánea, combina el equilibrio de sus telas con un alto control de la iluminación. 
    Textil que bloquea un alto porcentaje de los rayos UV, cuando sus segmentos se encuentran alternados.
    Sus colecciones de telas ofrecen diferentes texturas y niveles de privacidad que armonizan la decoración de cualquier ambiente.
    
    Segmento Duo
    El posicionamiento adecuado de los segmentos y su variedad de colecciones permiten desde una suave y delicada luminosidad, hasta un alto nivel de privacidad.
    
    Opacidad: 
    Semi Opacidad
    Opacidad 
    
    Accionamientos: 
    Sistema Cadena Plástica
    Sistema Motorizado
    
    `
  },
  {
    name: 'Cortinas horizontales de aluminio',
    img: ['Sunset_Horizontales_de_Aluminio', 'Sunset_Horizontales_de_Aluminio_2', 'Sunset_Horizontales_de_Aluminio_3'],
    id: 'cortinashorizontalesdealuminio',
    filters: [ProductFathersTypes.RESALES, TypeProduct.CURTAINS],
    description: `Fabricadas con aluminio de alta calidad, que brinda gran resistencia a las deformaciones. 
    Disponibles en láminas de 16 y 25 mm, en diferentes colores y texturas. 
    `
  },
  {
    name: 'Cortinas horizontales de madera',
    img: ['Sunset_Horizontales_de_Madera', 'Sunset_Horizontales_de_Madera_2', 'Sunset_Horizontales_de_Madera_3',],
    id: 'cortinashorizontalesdemadera',
    filters: [ProductFathersTypes.RESALES, TypeProduct.CURTAINS],
    description: `Realizadas con láminas de madera natural, en una amplia gama de tonos y acabados. Su nuevo diseño de base y cenefa coordina con el color de las láminas. 
    `
  },
  {
    name: 'Cortina Nantucket',
    img: ['Sunset_Nantucket1', 'Nantucket-Living2', 'Sunset_Nantucket_Living2'],
    id: 'cortinanantucket',
    filters: [ProductFathersTypes.RESALES, TypeProduct.CURTAINS],
    description: `Las cortinas Nantucket combinan la suavidad y la transparencia de una cortina con la funcionalidad de una persiana. Sus suaves láminas de tela opaca y semiopaca, suspendidas entre dos velos traslúcidos, permiten graduar la entrada de luz creando un juego único entre transparencia y privacidad. 

    Accionamientos: 
    Manual EasyRise 
    Motorizado 
    
    Opacidad: 
    Semi Opacidad
    Opacidad 
    `
  },
  {
    name: 'Panel oriental',
    img: ['Sunset_Paneles_Orientales', 'Sunset_Paneles_Orientales1', 'Sunset_Paneles_Orientales_2', 'Sunset_Paneles_Orientales_3', 'Sunset_Paneles_Orientales_4', 'Sunset_Paneles_Orientales_5',],
    id: 'cortinapaneloriental',
    filters: [ProductFathersTypes.RESALES,TypeProduct.CURTAINS],
    description: `Los paneles orientales es una cortina diseñada para ventanas de gran formato. Conformada por un sistema de paneles de tela que se deslizan suavemente a lo largo de canales independientes en un discreto cabezal de aluminio.
    Está disponible en diferentes opciones de apertura las cuales se adaptan a las necesidades de cada ambiente: Lateral, Bilateral y Central. 
    
    Niveles de opacidad:
    Traslúcido
    Semitraslúcido
    Semiopaco
    
    Accionamientos: 
    Manual 
    `
  },
  {
    name: 'Toldos',
    img: ['Sunset_Toldo_de_Proyección', 'Sunset_Toldo_de_Proyección_2', 'Sunset_Toldo_de_Proyección1', 'Sunset_Toldo_Vertical', 'Sunset_Toldo_Vertical_2'],
    id: 'cortinastoldos',
    filters: [ProductFathersTypes.RESALES,TypeProduct.CURTAINS],
    description: `Se fabrican con una innovadora técnica de juntas soldadas que ofrece un acabado liso y uniforme, en telas de alta performance a la intemperie. Disponibles en accionamiento manual y motorizado. 
    `
  },
  {
    name: 'Enrollable BlackOut',
    img: ['Sunset_Enrollables_Black_Out', 'Sunset_Enrollables_Black_Out1'],
    id: 'enrollable-blackout',
    description: `Flexibilidad & Diseño

    Las cortinas Enrollables ofrecen un sistema de control superior, de alta calidad, durabilidad y muy fácil instalación. Desde cortinas manuales hasta sistemas completamente
    automatizados. Ofrece un hardware excelente y un inigualable abanico de telas que proveen las soluciones ideales para el control de la luz y la temperatura de cualquier
    ambiente.

    Las cortinas Enrollables complementan el estilo de cualquier edificio. Desde pequeñas oficinas a grandes espacios públicos, realzan la performance y el aspecto de los espacios.
    Las amplia variedad de colecciones disponibles, permite a arquitectos y decoradores aproximarse a cualquier proyecto.
    
    Presenta también un rango de complementos opcionales, ideales para adaptar el producto a las necesidades de cualquier abertura.
    Componentes exclusivos, fáciles de instalar, como cenefas, cajas, canales, guías, tensores, son algunas de las tantas alternativas.
    `,
    filters: [ProductFathersTypes.RESALES,TypeProduct.CURTAINS],
    pdfButton: 'Copia de Copia de FT_Enrollables_Sunset_3-21'
  },
  {
    name: 'Enrollable Decorativa',
    img: ['Sunset__Enrollables__Decorativa', 'Sunset_Enrollables_Decorativas', 'Sunset_Enrollables_Decorativas1', 'Sunset_Enrollables_Decorativas_2'],
    id: 'enrollable-decorativa',
    description: `Flexibilidad & Diseño

    Las cortinas Enrollables ofrecen un sistema de control superior, de alta calidad, durabilidad y muy fácil instalación. Desde cortinas manuales hasta sistemas completamente
    automatizados. Ofrece un hardware excelente y un inigualable abanico de telas que proveen las soluciones ideales para el control de la luz y la temperatura de cualquier
    ambiente.

    Las cortinas Enrollables complementan el estilo de cualquier edificio. Desde pequeñas oficinas a grandes espacios públicos, realzan la performance y el aspecto de los espacios.
    Las amplia variedad de colecciones disponibles, permite a arquitectos y decoradores aproximarse a cualquier proyecto.
    
    Presenta también un rango de complementos opcionales, ideales para adaptar el producto a las necesidades de cualquier abertura.
    Componentes exclusivos, fáciles de instalar, como cenefas, cajas, canales, guías, tensores, son algunas de las tantas alternativas.
    `,
    filters: [ProductFathersTypes.RESALES,TypeProduct.CURTAINS],
    pdfButton: 'Copia de FT_Enrollables_Sunset_3-21'
  },
  {
    name: 'Enrollable Screen',
    img: ['2', '3', '4', 'Sunset_Enrollables_Screen', 'Sunset_Enrollables_Screen_4'],
    id: 'enrollable-screen',
    description: `Flexibilidad & Diseño

    Las cortinas Enrollables ofrecen un sistema de control superior, de alta calidad, durabilidad y muy fácil instalación. Desde cortinas manuales hasta sistemas completamente
    automatizados. Ofrece un hardware excelente y un inigualable abanico de telas que proveen las soluciones ideales para el control de la luz y la temperatura de cualquier
    ambiente.

    Las cortinas Enrollables complementan el estilo de cualquier edificio. Desde pequeñas oficinas a grandes espacios públicos, realzan la performance y el aspecto de los espacios.
    Las amplia variedad de colecciones disponibles, permite a arquitectos y decoradores aproximarse a cualquier proyecto.
    
    Presenta también un rango de complementos opcionales, ideales para adaptar el producto a las necesidades de cualquier abertura.
    Componentes exclusivos, fáciles de instalar, como cenefas, cajas, canales, guías, tensores, son algunas de las tantas alternativas.
    `,
    filters: [ProductFathersTypes.RESALES,TypeProduct.CURTAINS],
    pdfButton: 'FT_Enrollables_Sunset_3-21'
  },
];

export const resalesData: CatalogData[] = [
  ...barData,
  ...doorsResalesData,
  ...bathroomPartitionData,
  ...resaleCurtainsData
];

export const fachadasYLamas: CatalogData[] = [
  {
    name: 'Vidrio corrido V2',
    img: ['Vidrio corrido v2'],
    id: 'vidrio-corrido-v2',
    filters: [ProductFathersTypes.FACHADAS],
    description: `-`,
    specs: {
      
    }
  },
  {
    name: "Parasol",
    img: ['PARASOL'],
    id: 'parasol',
    filters: [ProductFathersTypes.FACHADAS, "parasol"],
    description:
      "Los parasoles son ideales para áreas exteriores que requieren protección contra la luz solar directa. Estas aberturas ofrecen sombra y confort sin comprometer la estética de la obra y proporcionan seguridad a las ventanas. Perfectos para instituciones, fachadas y contra fachadas. Pueden ser de lamas tubulares o laminares. Fijos o móviles.",
    specs: {
      description: [
        {
          title: 'Tipo de Producto',
          text: 'Parasol de Aluminio de Aluplast.'
        },
        {
          title: '  Composición',
          text: 'Fabricado con perfiles de aluminio de alta calidad y lamas tubulares o laminares, según la preferencia del cliente.'
        },
        {
          title: '  Conexión entre Módulos',
          text: 'Diseñado con un sistema modular que permite un montaje sólido y estable.'
        },
        {
          title: '  Eficiencia en el Montaje',
          text: 'Montaje sencillo y rápido.'
        },
        {
          title: '  Estética Elegante',
          text: 'Proporciona sombra y confort sin comprometer la estética de la obra.'
        },
        {
          title: '  Flexibilidad de Diseño',
          text: 'Se adapta a diferentes tamaños y formas de espacios exteriores.'
        },
        {
          title: '  Control de Calidad',
          text: 'Fabricado bajo estrictos estándares de calidad para garantizar durabilidad y resistencia.'
        },
        {
          title: '  Aplicaciones Versátiles',
          text: 'Ideal para áreas exteriores que requieren protección solar, como instituciones, fachadas y contrafachadas.'
        },
        {
          title: '  Practicidad',
          text: 'Ofrece soluciones de sombra con lamas tubulares o laminares fijas o móviles, según las necesidades del cliente'
        }
      ],
      features: [
        "Protección solar efectiva.",
        "Mayor comodidad en exteriores.",
        "Estética arquitectónica conservada.",
        "Configuraciones adaptables.",
      ],
    },
  },
  {
    name: "Frame",
    img: ["FRAME"],
    id: 'frame',
    filters: [ProductFathersTypes.FACHADAS, "frame"],
    description:`Estética
    ●Diseño actual e imagen continua de vidrio (sin presencia de aluminio visto desde el exterior).
    ●Admite, si el proyecto lo contempla, el montaje de perfiles cosméticos de aluminio en el exterior.

    Características
    ●Sistema modular acoplable de montaje rápido.
    ●Sistema de fijación con regulación en 3 dimensiones.
    
    Hermeticidad – Estanqueidad
    ●Junta de unión sellada.
    ●Burletes de silicona.
    ●Alta prestación ante cargas de viento.
    ●Sistema de alta eficiencia para edificios en altura.
    `,
    
  },
  {
    name: "Frente Integral",
    img: ["FRENTE-INTEGRAL"],
    id: 'frente-integral',
    filters: [ProductFathersTypes.FACHADAS, "frente-integral"],
    description:`Estética
    ●Diseñada en base a una vista frontal de 60 milímetros, con diversas profundidades de columna
    ●Permite generar Paños Vidriados, a los que puede añadirse Ventanas Desplazable, Puertas de Rebatir y otras Tipologías.
    ●Adaptable a diversos espesores de vidrio
    
    ●Corte a 90º
    ●Admite vidrios laminado, templados y DVH.
    
    ●Los paños fijos generados a partir de este sistema son aptos para responder a las más altas exigencias de Hermeticidad y Estanqueidad
    `,
    
  },
  {
    name: "Frente Vidriado",
    img: ["F-VIDRIADO"],
    id: 'frente-vidriado',
    filters: [ProductFathersTypes.FACHADAS, "frente-vidriado"],
    description:`Estética
    ●Diseñada en base a una vista frontal de 60 milímetros, con diversas profundidades de columna
    ●Permite generar Paños Vidriados, a los que puede añadirse Ventanas Desplazable, Puertas de Rebatir y otras Tipologías.
    ●Adaptable a diversos espesores de vidrio
    
    ●Corte a 90º
    ●Admite vidrios laminado, templados y DVH.
    
    ●Los paños fijos generados a partir de este sistema son aptos para responder a las más altas exigencias de Hermeticidad y Estanqueidad
    `,
    
  },
] 

export const glassesData: CatalogData[] = [

];

export const texturesData: TexturesTypes[] = [
  {
    name: "Bronce claro",
    img: "bronceclaro",
  },
  {
    name: "Bronce colonial",
    img: "broncecolonial",
  },
  {
    name: "Bronce medio",
    img: "broncemedio",
  },
  {
    name: "Gris micro texturado",
    img: "grismicrotexturado",
  },
  {
    name: "Negro micro texturado",
    img: "negromicrotexturado",
  },
  {
    name: "Negro semimate",
    img: "negrosemimate",
  },
  {
    name: "Anodizado gris",
    img: "anodizadogris",
  },
  {
    name: "Anodizado natural",
    img: "anodizadonatural",
  },
  {
    name: "Anodizado natural brillante",
    img: "anodizadonaturalbrillante",
  },
  {
    name: "Anodizado natural lijado",
    img: "anodizadonaturallijado",
  },
  {
    name: "Anodizado negro",
    img: "anodizadonegro",
  },
  {
    name: "Anodizado peltre",
    img: "anodizadopeltre",
  },
  {
    name: "Simil cedro",
    img: "similcedro",
  },
  {
    name: "Simil roble oscuro",
    img: "similrobleoscuro",
  },
];

export const doorsModel = [
  {
    name: "Modelos de puerta",
    img: ['100', '101', '102', '103', '105', '106', '109', '218', '219', '221', '223', '223-lisa', '227', '227-molduras', '228', '235', '236', '237', '241', '242', '243', '244', '245', '246', '247', '250', '251', '252'],
    id: 'modelosdepuerta',
    filters: [
      ProductFathersTypes.OPENERS_TYPES,
      TypeProduct.DOOR_PRODUCT,
    ],
  }, 
]



export const allCatalogData: CatalogData[] = [
  ...windowsData,
  ...doorsData,
  ...doorsModel,
  ...complementarySystemData,
  // ...closersData,
  ...controlSolar,
  ...windowsFatherData,
  ...garageDoorsData,
  ...resalesData,
  ...fachadasYLamas
];
