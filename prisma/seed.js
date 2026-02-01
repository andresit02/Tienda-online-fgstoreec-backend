// prisma/seed.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// --- PEGA AQUÍ TUS DATOS DEL FRONTEND ---

export const INVENTARIO_MOTOS = [
  {
    id: 1,
    nombre: "YAMAHA YZF - R1",
    fabricante: "Maisto",
    marca: "Yamaha",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769095533/D_NQ_NP_2X_629279-MLU73267337297_122023-F_qp3zhr.webp",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769093097/D_NQ_NP_2X_817921-MLU73267337305_122023-F_b8wdhr.webp",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769093097/D_NQ_NP_2X_927453-MLU77888111756_082024-F_fn8kst.webp"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },
  {
    id: 2,
    nombre: "KAWASAKI NINJA H2R",
    fabricante: "Maisto",
    marca: "Kawasaki",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 0,
    destacado: true,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156399/imgi_106_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742713606624-photo_5116222544473600082_y_dxnrdp.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156399/imgi_111_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742713606624-photo_5116222544473600083_y_lz3mcv.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156398/imgi_110_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742713606623-photo_5116222544473600084_y_r2p5b1.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },
  {
    id: 3,
    nombre: "KTM 1290 SUPER DUKE R",
    fabricante: "Maisto",
    marca: "KTM",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 0,
    destacado: true,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156702/imgi_101_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742668619265-photo_5114261419456572863_y_veu3xb.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156702/imgi_111_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742668619265-photo_5114261419456572864_y_qrft6c.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156702/imgi_112_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742668619265-photo_5114261419456572865_y_ottput.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156702/imgi_113_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742668619265-photo_5114261419456572866_y_na2vna.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156702/imgi_114_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742668619264-photo_5114261419456572867_y_x36j5c.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 4,
    nombre: "BMW S1000RR",
    fabricante: "Maisto",
    marca: "Bmw",
    escala: "1:12",
    precio: 32,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156918/imgi_38_97d3c770-e8c7-4cf5-87aa-f02c381bf638_h4aayt.png",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156878/imgi_103_404e35d5-5d70-4b50-82d2-05c9e24dc8d2_ir0rvv.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156891/imgi_105_c456b6cd-2115-4742-a3b7-cab3f7a90b48_saw9ja.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156879/imgi_106_dbe9c2c3-8f11-4e98-b751-b043f74e9842_en4tkn.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769156878/imgi_104_f8117fec-b85c-4da2-9891-2a865d6a1d6b_tgev4a.png"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 5,
    nombre: "HONDA FIREBLADE CBR1000RR-R",
    fabricante: "Maisto",
    marca: "Honda",
    escala: "1:12",
    precio: 32,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157026/imgi_103_5e050b26-a204-45a0-9a48-79ca1f3ad18f_lx94ib.png",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157026/imgi_36_6d9fa2a9-9cdf-46b8-984d-d14c1eac0e0e_cfauch.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157027/imgi_102_7e9e8f0e-73a8-45b4-9c22-a093d73b1e5e_ie0ng4.png"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 6,
    nombre: "KTM 1290 SUPER DUKE R",
    fabricante: "CCA (CoolChicAuto)",
    marca: "KTM",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157189/imgi_105_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742670300109-s-l16006_vtxntf.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157189/imgi_113_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742670287951-s-l9601_r07gpj.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157205/imgi_115_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742670287952-s-l16002_tinda1.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157205/imgi_116_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742670287952-s-l16002_wdoiey.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 9.8 (Ancho) × 15 (Alto)" }
  },

  {
    id: 7,
    nombre: "BMW R1250 GS",
    fabricante: "Rastar",
    marca: "BMW",
    escala: "1:9",
    precio: 40,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157316/imgi_6_749e3f84-ac47-40fa-89a8-739be02614be_ictfb4.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157316/imgi_103_c6b4f2f4-96f1-4391-8256-ec1984ccbc0b_aw1juf.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "" }
  },

  {
    id: 8,
    nombre: "YAMAHA YZ 450F",
    fabricante: "Maisto",
    marca: "Yamaha",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 1,
    destacado: true,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157569/imgi_71_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744823428317-d_nq_np_849534-mlu78688305197_082024-f_anmmcv.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157570/imgi_103_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744823428317-d_nq_np_853403-mlu78456347550_082024-f_us9ctv.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157570/imgi_105_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744823468097-photo_5078057916052909588_y_omjvb2.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157570/imgi_104_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744823428316-d_nq_np_760883-mlu78688134593_082024-f_i59jex.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee partes armables"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 9,
    nombre: "DUCATI 1199 PANIGALE",
    fabricante: "Maisto",
    marca: "Ducati",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157889/imgi_71_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744818279232-d_nq_np_981066-mla80813200403_112024-f_uyfzje.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157888/imgi_103_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744818279231-d_nq_np_692772-mla80551329776_112024-f_y4mlp0.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157889/imgi_104_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744818305768-s-l1600_vnipew.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157889/imgi_105_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744818296172-81fekocla5l._ac_sl1500__fnmgma.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee partes armables"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 10,
    nombre: "HUSQVARNA 701 SUPERMOTO 2023",
    fabricante: "Maisto",
    marca: "Husqvarna",
    escala: "1:12",
    precio: 26,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157999/imgi_40_f0eb8108-d056-4706-bc61-32f55e50df6e_whj3rz.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769157999/imgi_103_5e65b6c6-9593-44fa-999a-dbf6bd8caaad_pzxsut.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 11,
    nombre: "KTM 690 SMC R",
    fabricante: "Maisto",
    marca: "KTM",
    escala: "1:12",
    precio: 26,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769158082/imgi_39_3af1fbb3-0dc5-489f-ab28-d94945636bb2_lxpa3t.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769158081/imgi_105_1a165330-85ee-4587-8e80-fe11097bb2e3_wrhzne.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769158082/imgi_104_82bfa8ae-7aa3-4f5b-80ed-c5698c7e2ab5_xqtbwk.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769158082/imgi_103_ee3eada8-4b05-40fd-bdc1-2ef7ce303d50_lmdnhg.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 12,
    nombre: "KTM DUKE 250",
    fabricante: "Maisto",
    marca: "KTM",
    escala: "1:18",
    precio: 30,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769158449/imgi_226_71JJy4gqAwL._AC_SL1500__hbjtpb.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769158448/imgi_173_61OiJuqkjjL._AC_SL1500__echwjk.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769158449/imgi_210_61ZHwDo7gxL._AC_SL1500__igfyj4.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769158082/imgi_104_82bfa8ae-7aa3-4f5b-80ed-c5698c7e2ab5_xqtbwk.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769158082/imgi_103_ee3eada8-4b05-40fd-bdc1-2ef7ce303d50_lmdnhg.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "15.5 (Largo) × 7 (Ancho) × 10.5 (Alto)" }
  },

  {
    id: 13,
    nombre: "YAMAHA YZF - R1",
    fabricante: "Maisto",
    marca: "Yamaha",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769280090/imgi_111_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744781954902-322723yl-box__98571_dsv5dh.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769280296/imgi_18_s-l1600_vht0uo.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769280296/imgi_29_s-l1600_rh37vd.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769280296/imgi_112_s-l1600_pkohah.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769280295/imgi_28_s-l1600_wprcgp.png"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 14,
    nombre: "KAWASAKI NINJA H2R",
    fabricante: "XLG",
    marca: "Kawasaki",
    escala: "1:6",
    precio: 150,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769280883/imgi_84_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744780265195-principal_jekqnx.png",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769280883/imgi_10_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744780335491-8_621c53ac-f629-421b-a144-54823215e4f2_nts92i.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769280868/imgi_116_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744780265194-5_7a35c010-45fb-4d7d-a168-26cebd0667a1_fw2utt.png"
      ]
    },
    descripcion: "Posee simulación de aceleración y bota humo con llave de encendido",
    caracteristicas: [
      "Posee llave de encendido",
      "Posee botón para encender la motocicleta",
      "Función de aceleración realista",
      "Bota humo en el escape",
      "Abertura del tanque de gasolina",
      "Posee sonido al acelerar",
      "Tablera iluminado",
      "Luces delanteras",
      "El manubrio gira de lado a lado",
      "Suspensión trasera y delantera funcional",
      "Las ruedas son totalmente funcionales",
      "Posee soporte de exhibición para ambas ruedas"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "37 (Largo) × 14.5 (Ancho) × 24 (Alto)" }
  },

  {
    id: 15,
    nombre: "YAMAHA YZ 450F",
    fabricante: "NewRay",
    marca: "Yamaha",
    escala: "1:12",
    precio: 40,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769283174/imgi_87_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1744778392400-photo_4900183503346445908_y_sghz5v.png",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769283174/imgi_112_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1744778392400-photo_5082599788133854730_y1_miaiq4.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769283175/imgi_114_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1744778392400-photo_5082599788133854732_y2_v8bprg.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769283175/imgi_115_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1744778392400-photo_4900183503346445910_y_czpmct.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769283174/imgi_113_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1744778392400-photo_4900183503346445909_y_zpyy52.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769283174/imgi_116_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1744778392399-photo_4900183503346445912_y_zje5ps.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769283174/imgi_117_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1744778392400-photo_5082599788133854735_y1_zehyjj.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769283174/imgi_118_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1744778392400-photo_4900183503346445911_y_zamppa.png"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "20.5 (Largo) × 7 (Ancho) × 12 (Alto)" }
  },

  {
    id: 16,
    nombre: "KTM 450 SX-F",
    fabricante: "NewRay",
    marca: "KTM",
    escala: "1:12",
    precio: 42.5,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769284061/imgi_101_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742667960396-d_nq_np_821573-mco73738483470_012024-f_ajruza.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769284060/imgi_113_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742667960397-d_nq_np_903619-mla73836356759_012024-f_biyvuq.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769284059/imgi_114_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742667960396-d_nq_np_750335-mco73738736624_012024-f_dgye8k.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769284022/imgi_116_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742667960396-d_nq_np_620565-mco73738696952_012024-f_tpbtfo.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769284061/imgi_115_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742667960397-d_nq_np_809516-mco73738512508_012024-f_rfmctz.jpg"
      ]
    },
    descripcion: "Edición especial con el piloto profesional COOPER WEBB #2",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "20.5 (Largo) × 7 (Ancho) × 17.2 (Alto)" }
  },

  {
    id: 17,
    nombre: "KTM 450 SX-F",
    fabricante: "NewRay",
    marca: "KTM",
    escala: "1:12",
    precio: 60,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285004/imgi_47_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1745415635699-d_nq_np_964935-mlm83044983696_032025-f_bu3st8.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285004/imgi_108_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1745415635699-d_nq_np_650666-mlm83045298578_032025-f_neys8o.jpg"
      ]
    },
    descripcion: "Edición especial con el piloto profesional CHASE SEXTON #4",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "20.5 (Largo) × 7 (Ancho) × 17.2 (Alto)" }
  },

  {
    id: 18,
    nombre: "KTM RC 390",
    fabricante: "Maisto",
    marca: "KTM",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285189/imgi_93_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742668983604-photo_5114261419456572868_y_ufymoa.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285158/imgi_103_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742668983604-photo_5114261419456572869_y_u9tbtt.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285189/imgi_102_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742668983604-photo_5114261419456572870_y_a5qv61.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "21.5 (Largo) × 7 (Ancho) × 12 (Alto)" }
  },

  {
    id: 19,
    nombre: "HONDA CRF 450R",
    fabricante: "NewRay",
    marca: "Honda",
    escala: "1:12",
    precio: 40,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285363/imgi_82_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744782845041-photo_4900183503346445933_y_y0epnc.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285363/imgi_4_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744782845041-photo_4900183503346445934_y_e9magq.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285363/imgi_5_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744782845041-photo_4900183503346445935_y_yegkey.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285377/imgi_115_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744782845039-photo_4900183503346445937_y_lidzua.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285377/imgi_116_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744782845041-photo_4900183503346445936_y_xtpepy.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285363/imgi_114_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744782845041-photo_4900183503346445938_y_q7vtbp.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "20.5 (Largo) × 7 (Ancho) × 12 (Alto)" }
  },

  {
    id: 20,
    nombre: "DUCATI 1199 PANIGALE",
    fabricante: "Maisto",
    marca: "Ducati",
    escala: "1:12",
    precio: 32,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285731/imgi_115_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744818186763-s-l16002_jsxqhq.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285696/imgi_81_cc07f5e4-ce42-4035-b8ca-224b1e1fc8fc_ospboi.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285696/imgi_9_93a35abb-6395-45d7-8921-15a7910d319d_r9shxh.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769285696/imgi_113_daadf6af-260a-49c0-9485-945409e1ec6c_pvyifh.png"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 21,
    nombre: "YAMAHA MT 07",
    fabricante: "Maisto",
    marca: "Yamaha",
    escala: "1:18",
    precio: 30,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769317979/imgi_2_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744820669508-d_nq_np_955265-mlm83449430735_032025-f_w3kiuh.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769317979/imgi_113_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744820669508-d_nq_np_619182-mlm83449430643_032025-f_v1ddvm.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769317979/imgi_112_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744820821304-d_nq_np_2x_713820-cbt82875902930_032025-v_vvhfkt.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "15.5 (Largo) × 7 (Ancho) × 10.5 (Alto)" }
  },

  {
    id: 22,
    nombre: "YAMAHA MT 10sp",
    fabricante: "Maisto",
    marca: "Yamaha",
    escala: "1:18",
    precio: 30,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769318267/imgi_102_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744819810161-d_nq_np_616251-mlm83448663239_032025-f_vcyyjx.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769318267/imgi_103_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744819810162-d_nq_np_802223-mlm83157720430_032025-f_szompr.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769318267/imgi_104_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1744819810161-d_nq_np_622495-mlm83157641438_032025-f_sowvlg.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769318267/imgi_110_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744819810162-d_nq_np_885027-mlm83157680772_032025-f_df8f0l.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "15.5 (Largo) × 7 (Ancho) × 10.5 (Alto)" }
  },

  {
    id: 23,
    nombre: "YAMAHA YZF - R6",
    fabricante: "Welly",
    marca: "Yamaha",
    escala: "1:12",
    precio: 40,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769318776/imgi_73_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744821434296-d_nq_np_666941-cbt83405275211_032025-f-compatible-con-yamaha-r6-112-miniatura-metal-moto-con_cpumqd.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769318769/imgi_110_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744821434296-d_nq_np_997160-cbt83405275203_032025-f-compatible-con-yamaha-r6-112-miniatura-metal-moto-con_temzlq.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769318770/imgi_112_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744821434296-d_nq_np_614493-cbt83405275219_032025-f-compatible-con-yamaha-r6-112-miniatura-metal-moto-con_flnlcy.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769318770/imgi_111_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744821434296-d_nq_np_908399-cbt83405275201_032025-f-compatible-con-yamaha-r6-112-miniatura-metal-moto-con_e1vzvv.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte tipo caballete para la rueda trasera"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 9.8 (Ancho) × 12.8 (Alto)" }
  },

  {
    id: 24,
    nombre: "BMW S1000RR",
    fabricante: "Maisto",
    marca: "Bmw",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319364/WhatsApp_Image_2026-01-25_at_12.30.43_AM_xyac25.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319363/WhatsApp_Image_2026-01-25_at_12.30.48_AM_kvsgwt.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319364/WhatsApp_Image_2026-01-25_at_12.30.43_AM_1_wmu3di.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee partes armables"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 25,
    nombre: "KAWASAKI KX 450F",
    fabricante: "Maisto",
    marca: "Kawasaki",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319569/kawasaki-kx-450f-cross-model-do-skladania-1-12-maisto-b-iext145360765_yv1qqh.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319621/HTB1f4AwgrsTMeJjy1zcq6xAgXXaj_omgpvf.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319569/HTB1ZPO9czuhSKJjSspdq6A11XXaE_pa73nr.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee partes armables"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 26,
    nombre: "YAMAHA YZ 450F",
    fabricante: "NewRay",
    marca: "Yamaha",
    escala: "1:12",
    precio: 45,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319878/imgi_103_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744825560293-ny58323-box__84122_z0hyw1.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319877/imgi_105_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744825560293-ny58323-11__33498_fpkxal.jpg"
      ]
    },
    descripcion: "Edición especial con el piloto profesional ELI TOMAC #3",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "20.5 (Largo) × 7 (Ancho) × 17.2 (Alto)" }
  },

  {
    id: 27,
    nombre: "YAMAHA YZ 450F",
    fabricante: "NewRay",
    marca: "Yamaha",
    escala: "1:12",
    precio: 45,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319881/imgi_61_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744825540336-guest_adf345b0-e816-414d-94fc-998bc10cd6f2_v8jxrw.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319873/imgi_104_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744825540337-guest_27e62a38-8407-4f64-a903-821e6d9045d9_wgp6gp.jpg"
      ]
    },
    descripcion: "Edición especial con el piloto profesional DYLAN FERRANDIS #14",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "20.5 (Largo) × 7 (Ancho) × 17.2 (Alto)" }
  },

  {
    id: 28,
    nombre: "YAMAHA YZ 450F",
    fabricante: "NewRay",
    marca: "Yamaha",
    escala: "1:12",
    precio: 45,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319872/imgi_102_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744825548572-d_nq_np_761629-mpe82707664366_032025-f-yamaha-yz450f-coope-webb-moto-a-escala-112_r9tpcd.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319872/imgi_106_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744825548571-d_nq_np_608828-mpe82994853599_032025-f-yamaha-yz450f-coope-webb-moto-a-escala-112_rkzq7u.jpg"
      ]
    },
    descripcion: "Edición especial con el piloto profesional COOPER WEBB #2",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "20.5 (Largo) × 7 (Ancho) × 17.2 (Alto)" }
  },

  {
    id: 29,
    nombre: "KAWASAKI NINJA H2R",
    fabricante: "Maisto",
    marca: "Kawasaki",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319683/imgi_72_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744823234701-photo_4900183503346445978_y_bkbpsc.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319675/imgi_4_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744823234701-photo_4900183503346445979_y_xshlcu.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769319674/imgi_5_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1744823234700-photo_4900183503346445980_y_bcyjxd.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee partes armables"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 30,
    nombre: "KAWASAKI NINJA ZX - 10R",
    fabricante: "Maisto",
    marca: "Kawasaki",
    escala: "1:12",
    precio: 30,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769320320/00009015932709L_t55ymg.webp",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769320318/22-1__43325_t99kqc.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769320318/D_Q_NP_767984-MLA100010445107_122025-O_p0632k.webp"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 31,
    nombre: "SUZUKI HAYABUSA 2022",
    fabricante: "Maisto",
    marca: "Suzuki",
    escala: "1:12",
    precio: 28,
    categoria: "Moto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769320368/32724_d4q2tj.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769320364/9-1__73361_yddrxw.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769320365/maisto-mi32724-suzuki-hayabusa-2022-black-1-12-modellino_hopn9q.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 8.8 (Ancho) × 14 (Alto)" }
  },

  {
    id: 32,
    nombre: "KAWASAKI NINJA ZX - 10R",
    fabricante: "Welly",
    marca: "Kawasaki",
    escala: "1:12",
    precio: 40,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769320712/imgi_293_welly-1-12-kawasaki-ninja-zx-10r-motorcycle-alloy-model-car-1_1024x_xvmyq3.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769320713/imgi_16_welly-1-12-kawasaki-ninja-zx-10r-motorcycle-alloy-model-car-2_le5rwt.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769320704/imgi_134_welly-1-12-kawasaki-ninja-zx-10r-motorcycle-alloy-model-car-3_f1woek.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte tipo caballete para la rueda trasera"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 9.8 (Ancho) × 12.8 (Alto)" }
  },

  {
    id: 33,
    nombre: "KAWASAKI NINJA H2R",
    fabricante: "CCA (CoolChicAuto)",
    marca: "Kawasaki",
    escala: "1:12",
    precio: 35,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769321700/imgi_8_491443453_1193125972451972_2102806594865115478_n_uombcp.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769321702/imgi_32_491441718_1613157866067930_6243151108566435625_n_ej98ki.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769321704/imgi_33_490101532_3944430002512343_4368217840748378196_n_btvu2k.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769321703/imgi_32_490473405_2450278805317655_6127622403162176290_n_bkc8lx.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Incluye base de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "22.3 (Largo) × 9.8 (Ancho) × 12.8 (Alto)" }
  },

  {
    id: 34,
    nombre: "GasGas MC 450F",
    fabricante: "NewRay",
    marca: "Gasgas",
    escala: "1:12",
    precio: 40,
    categoria: "Moto",
    stock: 0,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769321587/imgi_9_491437373_980146844306377_1502920258397429977_n_t6wtdf.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769321621/imgi_41_491441783_1070181428278678_8480837909080206182_n_oabokw.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769321621/imgi_42_489558187_674276285557672_2917800515020410112_n_psbl0t.jpg"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "El manubrio gira de lado a lado",
      "Suspensión trasera funcional",
      "Ruedas totalmente funcionales",
      "Se puede mantener estática (Pata de apoyo lateral)",
      "Posee un soporte de exhibición"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "20.5 (Largo) × 7 (Ancho) × 12 (Alto)" }
  }

];


export const INVENTARIO_AUTOS = [
  {
    id: 1,
    nombre: "FORD RANGER 2019",
    fabricante: "Maisto",
    marca: "Ford",
    escala: "1:27",
    precio: 35,
    categoria: "Auto",
    stock: 1,
    destacado: true,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287079/D_NQ_NP_989218-MEC94591901533_102025-O_cs0guj.webp",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287152/imgi_31_D_Q_NP_828677-MLM84256275814_052025-F_gywkk0.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287152/imgi_43_D_Q_NP_858864-MLM84255872552_052025-B_yi8tzs.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287152/imgi_38_D_Q_NP_747219-MLM84552753437_052025-B_ln0pz1.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287152/imgi_48_D_Q_NP_898099-MLM84256069382_052025-B_fmcxmp.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287152/imgi_51_D_Q_NP_753647-MLM84255872556_052025-F_ceef8o.png"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "Neumáticos de caucho real",
      "Las puertas delanteras se abren",
      "Interior y exterior detallado"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "" }
  },
  {
    id: 2,
    nombre: "FORD RANGER 2019",
    fabricante: "Maisto",
    marca: "Ford",
    escala: "1:27",
    precio: 35,
    categoria: "Auto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287289/imgi_9_550_hemjdm.png",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287289/imgi_7_550_wulhsa.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287293/imgi_17_1000_yccvtp.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287289/imgi_5_550_sd7grt.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287289/imgi_6_550_xsw1xp.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769287289/imgi_8_550_zpxfar.png"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "Neumáticos de caucho real",
      "Las puertas delanteras se abren",
      "Interior y exterior detallado"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "" }
  },
  {
    id: 3,
    nombre: "CHEVROLET COLORADO ZR2 2017",
    fabricante: "Maisto",
    marca: "Chevrolet",
    escala: "1:27",
    precio: 35,
    categoria: "Auto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769288070/imgi_255_31517W__27049.1528474017.1200.1200_qn1jak.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769288065/imgi_4_483728445_18392984566098883_3346742788902973133_n_incp6o.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769288065/imgi_3_484246279_18392984533098883_7472647362828127520_n_t5lucz.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769288065/imgi_2_483623384_18392984542098883_4048730472422434707_n_kebtal.png"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "Neumáticos de caucho real",
      "Las puertas delanteras se abren",
      "Interior y exterior detallado"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "" }
  },
  {
    id: 4,
    nombre: "TOYOTA TACOMA TRD PRO 2023",
    fabricante: "Maisto",
    marca: "Toyota",
    escala: "1:27",
    precio: 35,
    categoria: "Auto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769288528/imgi_62_QQ20240405090205__01161_igji4p.png",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769288520/imgi_3_61R6TzN68NL._AC_SL500__pdb2mq.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769288526/imgi_5_6-2__83140.1735278562_tp1xmu.png"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "Neumáticos de caucho real",
      "Las puertas delanteras se abren",
      "Interior y exterior detallado"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "" }
  },
  {
    id: 5,
    nombre: "FORD RAPTOR 2017",
    fabricante: "Maisto",
    marca: "Ford",
    escala: "1:24",
    precio: 45,
    categoria: "Auto",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769289221/imgi_2_f54acdf9-fc63-43d3-9233-76677b5e65b7-1000x1000-VODLCMKjPjHFKhNmzk9aGA9qhUCfGFWhWIzZ2XsT_v4npmf.png",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769289226/imgi_27_208740-600-auto_vmejb1.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769289278/imgi_3_858a65f0-e91d-4f29-808e-bcb8774ff07f-1000x1000-e9iPKnFb3hyIyQ6QpGiIKr5mGulkspqctAI3n0dv_h8jiae.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769289221/imgi_4_bd48b02b-e453-447f-9f0b-f0767fcfe27a-1000x1000-6oVMMTQygqZJzZ04zAHVBesc0GxwEllhvfPbiJAQ_h6tbgs.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769289229/imgi_24_208741-1200-auto_eolrys.png"
      ]
    },
    descripcion: "Producto con licencia oficial y empaque original",
    caracteristicas: [
      "Neumáticos de caucho real",
      "Las puertas delanteras y el maletero se abren",
      "Interior y exterior detallado"
    ],
    materiales: "Metal fundido a presión con piezas de plástico y llantas de goma",
    medidasCaja: { texto: "" }
  }
];


export const INVENTARIO_HOTWHEELS = [
  {
    id: 1,
    nombre: "LAMBORGHINI REVUELTO 2023 🔥",
    marca: "Lamborghini",
    serie: "Premium",
    escala: "1:43",
    precio: 60,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: true,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769291734/WhatsApp_Image_2026-01-24_at_4.35.22_PAAM_l4tfvw.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769290638/WhatsApp_Image_2026-01-24_at_4.35.23_PM_iokboh.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769290615/WhatsApp_Image_2026-01-24_at_4.35.25_PM_nnfw9g.jpg"
      ]
    },
    descripcion: "HOTWHEELS PREMIUM TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 2,
    nombre: "'95 LAMBORGHINI DIABLO SV",
    marca: "Lamborghini",
    serie: "Premium",
    escala: "1:64",
    precio: 18,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769291411/imgi_211_jpg_jmmsy3.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769291411/imgi_181__vok2ko.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769291410/imgi_156__gkfwga.jpg"
      ]
    },
    descripcion: "HOTWHEELS PREMIUM TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 3,
    nombre: "'17 FORD GT",
    marca: "Ford",
    serie: "Premium",
    escala: "1:64",
    precio: 18,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769291580/WhatsApp_Image_2026-01-24_ata_4.42.51_PM_b3snrn.jpg",
      galeria: []
    },
    descripcion: "HOTWHEELS PREMIUM TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 4,
    nombre: "LAFERRARI",
    marca: "Ferrari",
    serie: "Premium",
    escala: "1:64",
    precio: 18,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: true,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769291852/WhatsApp_Image_2026-01-24_at_4.42.52_PM_rkchkv.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769291736/WhatsApp_Image_2026-01-24_at_4.42.49_PM_zx73mk.jpg"
      ]
    },
    descripcion: "HOTWHEELS PREMIUM TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 5,
    nombre: "FERRARI 499P",
    marca: "Ferrari",
    serie: "Premium",
    escala: "1:64",
    precio: 18,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769291981/WhatsApp_Image_2v026-01-24_at_4.42.42_PM_zrmfdz.jpg",
      galeria: []
    },
    descripcion: "HOTWHEELS PREMIUM TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 6,
    nombre: "NISSAN SILVIA (S15)",
    marca: "Nissan",
    serie: "Silver Series",
    escala: "1:64",
    precio: 15,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769292128/WhatsApp_Image_2026-01-21_at_11.04.38_PM_q2oua5.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769292226/imgi_24_hot-wheels-nissan-silvia-s15-graphic-remix-fast-furious-silver-series-mattel-2025-special_moh4hk.jpg"
      ]
    },
    descripcion: "HOTWHEELS SILVER SERIES TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: [
      "Serie de RAPIDOS Y FURIOSOS",
      "Modelo con un diseño impresionante y detalles precisos."
    ],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 7,
    nombre: "LANCER EVOLUTION VII",
    marca: "Mitsubishi",
    serie: "Silver Series",
    escala: "1:64",
    precio: 15,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769292128/WhatsApp_Image_2026-01-21_at_11.04.38_PM_1_axcsxy.jpg",
      galeria: []
    },
    descripcion: "HOTWHEELS SILVER SERIES TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: [
      "Serie de RAPIDOS Y FURIOSOS",
      "Modelo con un diseño impresionante y detalles precisos."
    ],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 8,
    nombre: "MONEYGRAM HAAS F1 TEAM - VF-24 (#20)",
    marca: "Haas",
    serie: "Premium",
    escala: "1:64",
    precio: 25,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769292723/WhatsApp_Image_2026hh-01-24_at_4.42.41_PM_puhrbt.jpg",
      galeria: []
    },
    descripcion: "HOTWHEELS PREMIUM TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["FORMULA 1 SERIES"],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 9,
    nombre: "KICK SAUBER F1 TEAM (#24)",
    marca: "Kick Sauber",
    serie: "Premium",
    escala: "1:64",
    precio: 25,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769292722/WhatsApp_Imbbage_2026-01-24_at_4.42.47_PM_qhpv4o.jpg",
      galeria: []
    },
    descripcion: "HOTWHEELS PREMIUM TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["FORMULA 1 SERIES"],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 10,
    nombre: "WILLIAMS RACING - FW46 (#43)",
    marca: "Williams",
    serie: "Premium",
    escala: "1:64",
    precio: 25,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769292800/WhatsApp_Image_2026-01-24_at_4.42.4t8_PM_1_dwzgrw.jpg",
      galeria: []
    },
    descripcion: "HOTWHEELS PREMIUM TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["FORMULA 1 SERIES"],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 11,
    nombre: "McLAREN FORMULA 1 TEAM (#4)",
    marca: "McLaren",
    serie: "Premium",
    escala: "1:64",
    precio: 25,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769292722/WhatsApp_Image_2026-01yyy-24_at_4.42.48_PM_eoezqt.jpg",
      galeria: []
    },
    descripcion: "HOTWHEELS PREMIUM TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["FORMULA 1 SERIES"],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 12,
    nombre: "'94 BUGATTI EB110 SS",
    marca: "Bugatti",
    serie: "Basicos",
    escala: "1:64",
    precio: 4,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769294896/imgi_22_D_Q_NP_746518-MCO93972253211_102025-F_tqlqaz.png",
      galeria: []
    },
    descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 13,
    nombre: "FORD RS200",
    marca: "Ford",
    serie: "Basicos",
    escala: "1:64",
    precio: 4,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769296480/imgi_22_1_org_zoom_bjbgtq.jpg",
      galeria: []
    },
    descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
    materiales: "",
    medidasCaja: { texto: "" }
  },

  {
    id: 14,
    nombre: "LAMBORGHINI HURACÁN STERRATO",
    marca: "Lamborghini",
    serie: "Basicos",
    escala: "1:64",
    precio: 4,
    categoria: "Hot Wheels",
    stock: 1,
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769296698/imgi_19_GUEST_8ad705df-7b08-4998-9a7c-a92ffe1a2ea1_oscu3q.jpg",
      galeria: []
    },
    descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
    caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
    materiales: "",
    medidasCaja: { texto: "" }
  },
  {
  id: 15,
  nombre: "1996 BAT BOAT / BATEAU",
  marca: "Batmobile",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769297690/imgi_13_D_NQ_NP_2X_847588-MLM96177727164_102025-F_vkowck.png",
    galeria: [
      "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769297606/imgi_31_D_Q_NP_854819-MLM96620894279_102025-B_w41tx2.png",
      "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769297690/imgi_36_D_Q_NP_760349-MLM96622845659_102025-B_phsntb.png"
    ]
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 16,
  nombre: "DMC DELOREAN",
  marca: "DeLorean",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769298411/imgi_10_D_Q_NP_657744-CBT104932005985_012026-F-hot-wheels-24-dmc-delorean-plateado_wteaks.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["TH (Treasure Hunt)", "Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 17,
  nombre: "1983 PORSCHE 928S",
  marca: "Porsche",
  serie: "Basicos",
  escala: "1:64",
  precio: 3.5,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769297695/imgi_17_D_Q_NP_853633-MLM92048076019_092025-F_fnqds5.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 18,
  nombre: "SHARK BITE",
  marca: "Fantasia",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769297764/imgi_19_D_Q_NP_919168-MLM93161523134_092025-F_ft6emt.png",
    galeria: [
      "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769298104/imgi_34_D_Q_NP_613695-MLM93578132411_092025-F_dm6sg6.png",
      "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769298104/imgi_24_D_Q_NP_715398-MLM93578269955_092025-F_anwhn3.png"
    ]
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["TH (Treasure Hunt)", "Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 19,
  nombre: "MAZDA 787B",
  marca: "Mazda",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769298656/imgi_16_D_Q_NP_871424-MLM93162885088_092025-F_pwv3a2.png",
    galeria: [
      "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769298656/imgi_26_D_Q_NP_634402-MLM93162461358_092025-F_llroil.png",
      "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769298656/imgi_21_D_Q_NP_862962-MLM93578943245_092025-F_sor9k8.png"
    ]
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 20,
  nombre: "LAMBORGHINI HURACÁN STERRATO",
  marca: "Lamborghini",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769298728/imgi_10_D_Q_NP_897360-MLM92244734852_092025-F_liwobd.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 21,
  nombre: "McLAREN W1",
  marca: "McLaren",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769298838/imgi_10_D_Q_NP_897360-MLM92244734852_092025-F_nikekn.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 22,
  nombre: "'68 CORVETTE - GAS MONKEY GARAGE",
  marca: "Chevrolet",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769299140/imgi_14_D_Q_NP_795888-MLM83948834985_042025-F_nfsiyg.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Serie de GAS MONKEY GARAGE", "Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 23,
  nombre: "CHEVY EL CAMINO",
  marca: "Chevrolet",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769299290/imgi_67_D_Q_NP_2X_791409-MLA99635986116_122025-F_utyovd.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Serie de RAPIDOS Y FURIOSOS", "Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 24,
  nombre: "DMC DELOREAN",
  marca: "DeLorean",
  serie: "Basicos",
  escala: "1:64",
  precio: 3.5,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769299493/imgi_34_a7155c4e-14fa-45ae-a5e2-776cc3c70209_rkwasx.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 25,
  nombre: "HW450F",
  marca: "Fantasia",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769299607/imgi_61_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1745257556903-image19_c5or9e.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 26,
  nombre: "K.I.T.T.",
  marca: "Pontiac",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769300103/imgi_20_D_Q_NP_714803-MLM105700028459_012026-F_wvs5wn.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Serie de EL AUTO FANTASTICO", "Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 27,
  nombre: "DISNEY STEAMBOAT",
  marca: "Fantasia",
  serie: "Basicos",
  escala: "1:64",
  precio: 5,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769300930/imgi_21_D_Q_NP_720847-MLM90393294479_082025-F-hot-wheels-basicos-tematicos-fantasia-autos-a-escala_mtyllb.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Serie de DISNEY - MICKEY MOUSE", "Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 28,
  nombre: "PAGANI UTOPIA",
  marca: "Pagani",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769300979/imgi_67_D_Q_NP_923905-MLM101858598962_122025-B_bangkn.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 29,
  nombre: "DATSUN 240Z",
  marca: "Datsun",
  serie: "Basicos",
  escala: "1:64",
  precio: 3.5,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769301286/imgi_15_D_Q_NP_799748-MLM88105272750_072025-F_ifnnbe.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 30,
  nombre: "HONDA VFR750R (RC30)",
  marca: "Honda",
  serie: "Basicos",
  escala: "1:64",
  precio: 5,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769301391/imgi_14_D_Q_NP_870759-MLM100099231798_122025-B_keqgkm.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 31,
  nombre: "'83 CHEVY SILVERADO",
  marca: "Chevrolet",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769301680/imgi_5_a525c9_05d005671bae43c1ad4880aaf06b0cef_mv2_ltue0r.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 32,
  nombre: "2018 HONDA CIVIC TYPE R",
  marca: "Honda",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769301790/imgi_15_HOTWHEELS_THEN_AND_NOW_HONDA_CIVIC_TYPE_R_RED_1_1024x1024_ngybgu.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 33,
  nombre: "'67 FORD GT40 Mk.IV",
  marca: "Ford",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769302156/imgi_16_D_Q_NP_981134-MLA99985726661_112025-B_qpuyah.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},
{
  id: 34,
  nombre: "PEUGEOT 9X8 HYPERCAR/HYPERVOITURE",
  marca: "Peugeot",
  serie: "Basicos",
  escala: "1:64",
  precio: 4,
  categoria: "Hot Wheels",
  stock: 1,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769302161/imgi_5_D_NQ_NP_2X_681864-MLM94160893807_102025-F-hot-wheels-edicion-especial-164-raros-modelos-locos_inkwks.png",
    galeria: []
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
},

{
  id: 35,
  nombre: "5 PACK FORMULA 1",
  marca: "F1",
  serie: "Basicos",
  escala: "1:64",
  precio: 20,
  categoria: "Hot Wheels",
  stock: 0,
  destacado: false,
  imagenes: {
    principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769321697/imgi_5_573143581_17917360923206181_1601673467407859963_n_xxngue.jpg",
    galeria: [
      "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769321698/imgi_38_574345301_17917360932206181_2885491590697938382_n_jn4q6w.jpg",
      "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769321682/imgi_40_573118801_17917360953206181_493045315339445010_n_rpj8oe.jpg",
    ]
  },
  descripcion: "HOTWHEELS BASICOS TOTALMENTE NUEVOS Y ORIGINALES",
  caracteristicas: ["Modelo con un diseño impresionante y detalles precisos."],
  materiales: "",
  medidasCaja: { texto: "" }
}


];


export const INVENTARIO_ACCESORIOS = [
  {
    id: 1,
    nombre: "RELOJ CASIO PARA HOMBRE MTP-V005L-7B5",
    precio: 45,
    categoria: "Relojes", // Esto actuará como el filtro "Tipo"
    stock: 1,
    destacado: true,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769328057/imgi_4_image_clr4nt.png",
      galeria: []
    },
    descripcion: "Reloj CASIO totalmente nuevo y original",
    caracteristicas: [
      "Acero inoxidable",  
      "Tamaño de la caja: 47 × 40 × 8.1 mm", 
      "Correa de cuero",
      "Duración aproximada de la batería: 3 años",
      "Resistente al agua"
    ]
  },
  {
    id: 2,
    nombre: "RELOJ CASIO PARA HOMBRE MTP-V005L-7B5",
    precio: 45,
    categoria: "Relojes",
    stock: 2,
    destacado: true,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769328064/imgi_22_MTP-V005L-7B-1_ki3fkh.png",
      galeria: []
    },
    descripcion: "Reloj CASIO totalmente nuevo y original",
    caracteristicas: [
      "Acero inoxidable",  
      "Tamaño de la caja: 47 × 40 × 8.1 mm", 
      "Correa de cuero",
      "Duración aproximada de la batería: 3 años",
      "Resistente al agua"
    ]
  },
  {
    id: 3,
    nombre: "GUANTES DE MOTOCICLETA",
    precio: 15.00,
    categoria: "Guantes",
    stock: 0, // Agotado para probar filtro
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325409/imgi_83_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742786088251-sf63ee134f31e41ecbae2d8605ec404e3t.jpg_960x960q75.jpg__fe5y2x.jpg",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325416/imgi_103_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1743273391509-373e9133-62ad-4fe7-9dfb-9a5c2fb71b8d_vflwjz.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325418/imgi_104_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1743273391510-f492fd02-f038-4617-be98-e61a3d1675cd_g2at57.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325413/imgi_105_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1743273391508-ced2bf94-4799-47fb-bb19-0343cd31e4a8_rb20ab.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325413/imgi_106_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1743273391507-7b553fa9-3e0e-4b79-a017-3387510714d5_djgmwj.jpg",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325409/imgi_107_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1743273391509-3b549dd8-842b-4cc1-adf4-2e228e92b914_g1mqfp.jpg"
      ]
    },
    descripcion: "Guantes de motocicleta con diseño plegable y protecciones.",
    caracteristicas: [
      "Poliester + Nylon + Esponja ",
      "Diseño plegable con protecciones",
      "Ajustable a la muñeca ",
      "Antideslizantes"
    ]
  },

  {
    id: 4,
    nombre: "LLAVERO BIKER",
    precio: 4,
    categoria: "Llaveros",
    stock: 0, // Agotado para probar filtro
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325425/imgi_86_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742780072708-whatsappimage2025-03-08at4.41.42pm1_bj8of9.jpg",
      galeria: []
    },
    descripcion: "Mensaje: Conduce con cuidado, recuerda que te necesito aquí conmigo. Te amo ❤️",
    caracteristicas: []
  },

  {
    id: 5,
    nombre: "CAMPANA BIKER",
    precio: 4,
    categoria: "Llaveros",
    stock: 0, // Agotado para probar filtro
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325424/imgi_85_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742781408060-whatsappimage2025-03-08at5.10.29pm_tebjms.jpg",
      galeria: []
    },
    descripcion: "Instala una Campana Biker en tu motocicleta y ahuyenta a los espíritus malos, atrapa la mala suerte y los problemas mecánicos",
    caracteristicas: []
  },

  {
    id: 6,
    nombre: "LLAVERO BIKER",
    precio: 4,
    categoria: "Llaveros",
    stock: 1, // Agotado para probar filtro
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325698/imgi_43_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1745338659602-9fc58f43-9852-4dd2-8820-064ee263f3e8_xzpcla.png",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325659/imgi_103_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1745338659602-96f9fc31-b8e8-4445-8d34-9d65c4afbea0_ww2osz.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325700/imgi_102_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1745338659601-716e04a0-9fa6-4dae-9453-11604901970c_smydtk.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325656/imgi_104_store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1745338659602-webp_cdgoar.jpg"
      ]
    },
    descripcion: "",
    caracteristicas: ["Llavero de goma", "perfecto para regalo", "accesorio de bolso y/o mochila"]
  },

  {
    id: 7,
    nombre: "LLAVERO BIKER",
    precio: 4,
    categoria: "Llaveros",
    stock: 1, // Agotado para probar filtro
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769327050/store_01JPB7BHTY6WKC6WA5QMHVK4B6_assets_1742781792001-whatsappimage2025-03-08at4.41.42pm_we6nfl.avif",
      galeria: []
    },
    descripcion: "Llavero de tela con bordado",
    caracteristicas: []
  },

  {
    id: 8,
    nombre: "LLAVERO BIKER",
    precio: 4,
    categoria: "Llaveros",
    stock: 1, // Agotado para probar filtro
    destacado: false,
    imagenes: {
      principal: "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325647/imgi_106_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1745339263426-b763cfb1-d989-4987-948d-560ef2c75d35_pqpjp5.png",
      galeria: [
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325652/imgi_102_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1745339296535-789921f9-5a4c-4d06-aee6-98db167dd162_luxop4.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325650/imgi_103_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1745339263427-webp1_afiilv.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325654/imgi_104_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1745339263427-db5957db-1f64-420c-a8be-3b3bb8da3fe5_ojvsry.png",
        "https://res.cloudinary.com/dx0dmthm2/image/upload/v1769325646/imgi_105_store_01JPB7BHTY6WKC6WA5QMHVK4B6_2Fassets_2F1745339263427-webp_un7imn.jpg"
      ]
    },
    descripcion: "LLavero de motocicleta",
    caracteristicas: [
        "Manubrio funcional",
        "Ruedas giratorias",
        "Posee pata de apoyo lateral"
    ]
  }
];

// --------------------------------------------------------
// LÓGICA DE CARGA (NO NECESITAS TOCAR NADA AQUÍ ABAJO)
// --------------------------------------------------------

async function main() {
  console.log('🌱 Iniciando carga de datos...');

  // 1. Limpiamos la tabla de productos para no duplicar datos si corres el script varias veces
  try {
    // Primero borramos detalles de ordenes si existieran para evitar errores de llave foránea
    await prisma.orderItem.deleteMany({}); 
    await prisma.product.deleteMany({});
    console.log('🗑️  Base de datos limpiada correctamente.');
  } catch (error) {
    console.warn('⚠️  Nota: Primera ejecución o tablas ya vacías.');
  }

  // 2. Unificamos todas las listas usando los nombres CORRECTOS de tus constantes
  const todos = [
    ...INVENTARIO_MOTOS.map(p => ({ ...p, categoria: "Motos" })),
    ...INVENTARIO_AUTOS.map(p => ({ ...p, categoria: "Autos" })),
    ...INVENTARIO_HOTWHEELS.map(p => ({ ...p, categoria: "Hot Wheels" })),
    ...INVENTARIO_ACCESORIOS.map(p => ({ ...p, categoria: "Accesorios" }))
  ];

  console.log(`📦 Procesando ${todos.length} productos...`);

  // 3. Insertamos uno por uno
  for (const p of todos) {
    await prisma.product.create({
      data: {
        // IMPORTANTE: No enviamos p.id para evitar conflictos (Moto 1 vs Auto 1).
        // Dejamos que la base de datos asigne IDs únicos (1, 2, 3, 4...)
        nombre: p.nombre,
        precio: Number(p.precio), // Aseguramos que sea número
        stock: p.stock !== undefined ? p.stock : 1,
        categoria: p.categoria,
        imagenes: p.imagenes, 
        caracteristicas: p.caracteristicas || [],
        descripcion: p.descripcion || "",
        marca: p.marca || null,
        fabricante: p.fabricante || null,
        escala: p.escala || null,
        serie: p.serie || null,
        materiales: p.materiales || null,
        medidasCaja: p.medidasCaja || null,
        destacado: p.destacado || false
      }
    });
  }

  console.log('✅ ¡Todos los productos cargados exitosamente en Supabase!');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });