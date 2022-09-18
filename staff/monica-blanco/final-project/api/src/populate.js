require("dotenv").config();
const {
  env: { MONGO_URL },
} = process;
const mongoose = require("mongoose");
const { connect, disconnect } = mongoose

const { User, Location, Workspace, Reservation } = require("./models"); 


connect(MONGO_URL)
//   .then(() => {
//     console.log(`db connected`);
//     return Promise.all([
//       User.deleteMany(),
//       Location.deleteMany(),
//       Reservation.deleteMany(),
//       Workspace.deleteMany(),
//     ]);
//   })
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => {
    const pepito = new User({
      name: "Pepito Grillo",
      email: "pepito@grillo.com",
      password: "123123123",
    });

    const wendy = new User({
      name: "Wendy Darling",
      email: "wendy@darling.com",
      // email: 'pepito@grillo.com',
      password: "12312123",
    });

    const peter = new User({
      name: "Peter Pan",
      email: "peter@pan.com",
      password: "123123123",
    });

    const james = new User({
      name: "James Hook",
      email: "james@hook.com",
      password: "123123123",
    });

    return Promise.all([
      pepito.save(),
      wendy.save(),
      peter.save(),
      james.save(),
    ]);
  })
  .then(([pepito, wendy, peter, james]) => {
    const pobleNou = new Location({
      name: "PobleNou Building",
      address: "Calle de Ramon Turró, 169, A, 08005 Barcelona",
      image:
        "https://talentgarden.org/wp-content/uploads/2020/09/894D58E0-7E23-477C-A840-90309F24ACA3-scaled.jpg",
    });

    const diagonal = new Location({
      name: "Diagonal Building",
      address: "Avinguda Diagonal, 444, ground floor, 08037 Barcelona",
      image:
        "https://www.distritooficina.com/wp-content/uploads/2019/07/WeWork-calle-Tanger_-Glories_1-685x1024.jpg",
    });
    const passeiGracia = new Location({
      name: "Passeig de Gracia Building",
      address: "Passeig de Gràcia, 92, 08008 Barcelona",
      image:
        "https://cdn2.civitatis.com/espana/barcelona/galeria/la-pedrera-barcelona-fachada.jpg",
    });

    return Promise.all([pobleNou.save(), diagonal.save(), passeiGracia.save()]).then(
      ([pobleNou, diagonal]) => {
        const office1 = new Workspace({
          location: pobleNou.id,
          name: "Office Private 1",
          price: 45,
          image:
            "http://cortinas-acusticas.com/wp-content/uploads/cortinas-ac%C3%BAsticas-para-separar-ambientes-en-centros-de-negocios.jpg",
          description: "Ideal for individuals and small teams.",
        });

        const office2 = new Workspace({
          location: pobleNou.id,
          name: "Suite",
          price: 80,
          image:
            "https://oxygenworkspace.com/wp-content/uploads/2021/06/Despacho-04-1.jpg",
          description: "Capacity for a maximum of 20 people.",
        });

        const office3 = new Workspace({
          location: diagonal.id,
          name: "Community Office",
          price: 75,
          image:
            "https://loom.es/wp-content/uploads/2022/04/Diseno-sin-titulo-2022-04-04T131947.438.png",
          description: "Enjoy shared services and meeting rooms.",
        });

        const office4 = new Workspace({
          location: diagonal.id,
          name: "Living Room Small",
          price: 65,
          image:
            "https://www.profesionalreview.com/wp-content/uploads/2020/06/Ordenador-en-el-suelo-o-en-la-mesa-03-scaled.jpg",
          description: "Fully equipped private office space.",
        });

        const office5 = new Workspace({
          location: diagonal.id,
          name: "Desk",
          price: 50,
          image:
            "https://madrid.impacthub.net/wp-content/uploads/2022/05/historia_coworking_blog.jpg",
          description: "Enjoy shared services and meeting rooms.",
        });

        const office6 = new Workspace({
          location: diagonal.id,
          name: "Living room",
          price: 85,
          image:
            "https://www.lexington.es/app/uploads/2021/05/que-es-un-coworking.jpg",
          description: "Fully equipped private office space.",
        });

        const office7 = new Workspace({
          location: diagonal.id,
          name: "Desk small",
          price: 45,
          image:
            "https://www.livinghomes.es/wp-content/uploads/coworking-living-1024x576.jpg",
          description: "Enjoy shared services and meeting rooms.",
        });

        const office8 = new Workspace({
          location: diagonal.id,
          name: "Office Private",
          price: 100,
          image:
            "https://actiucdn.net/uploads/images/actualidad/descripciones/consejos-poner-en-marcha-coworking-funcione-10_782_651.jpg",
          description: "Enjoy shared services and meeting rooms.",
        });
        const office9 = new Workspace({
          location: diagonal.id,
          name: "Office Private Large",
          price: 100,
          image:
            "https://actiucdn.net/uploads/images/actualidad/descripciones/consejos-poner-en-marcha-coworking-funcione-10_782_651.jpg",
          description: "Enjoy shared services and meeting rooms.",
        });
        const office10 = new Workspace({
          location: diagonal.id,
          name: "Small Private Office",
          price: 30,
          image:
            "https://www.happyworkinglab.com/wp-content/uploads/2018/06/SPACES-MX-2-1024x682-1024x682.jpg",
          description: "Enjoy shared services and meeting rooms.",
        });
        const office11 = new Workspace({
          location: pobleNou.id,
          name: "Office Private",
          price: 45,
          image:
            "https://actiucdn.net/uploads/images/actualidad/descripciones/consejos-poner-en-marcha-coworking-funcione-10_782_651.jpg",
          description: "Enjoy shared services and meeting rooms.",
        });
        const office12 = new Workspace({
          location: pobleNou.id,
          name: "Office Private",
          price: 30,
          image:
            "https://coworkinglafabrica.es/wp-content/uploads/2018/06/C5A5816.jpg",
          description: "Enjoy shared services and meeting rooms.",
        });
        const office13 = new Workspace({
          location: passeiGracia.id,
          name: "Shared office",
          price: 50,
          image:
            "https://i.pinimg.com/originals/9a/e5/b3/9ae5b302e45ea5607079a561392f20c0.jpg",
          description: "Your own desk in a shared office and full access to kujo facilities.",
        });
        const office14 = new Workspace({
          location: passeiGracia.id,
          name: "Office Private",
          price: 100,
          image:
            "https://actiucdn.net/uploads/images/actualidad/descripciones/consejos-poner-en-marcha-coworking-funcione-10_782_651.jpg",
          description: "Furnished office space with private services.",
        });
        const office15 = new Workspace({
          location: passeiGracia.id,
          name: "Office Luxury",
          price: 100,
          image:
            "https://coworkinglafabrica.es/wp-content/uploads/2018/06/C5A5816.jpg",
          description: "Luxury Office, a space configurable to your needs.",
        });

        return Promise.all([
          office1.save(),
          office2.save(),
          office3.save(),
          office4.save(),
          office5.save(),
          office6.save(),
          office7.save(),
          office8.save(),
          office9.save(),
          office10.save(),
          office11.save(),
          office12.save(),
          office13.save(),
          office14.save(),
          office15.save()
        ]).then(
          ([office1, office2, office3, office4, office5, office6, office7]) => {
            const reservation1 = new Reservation({
              user: pepito.id,
              workspace: office1.id,
              date: new Date("09/02/2022"),
            });

            const reservation2 = new Reservation({
              user: wendy.id,
              workspace: office3.id,
              date: new Date("08/09/2022"),
            });

            const reservation3 = new Reservation({
              user: peter.id,
              workspace: office2.id,
              date: new Date("10/10/2022"),
            });

            const reservation4 = new Reservation({
              user: james.id,
              workspace: office2,
              date: new Date("12/05/2022"),
            });

            const reservation5 = new Reservation({
              user: peter.id,
              workspace: office3,
              date: new Date("09/15/2022"),
            });

            const reservation6 = new Reservation({
              user: wendy.id,
              workspace: office4.id,
              date: new Date("11/23/2022"),
            });

            const reservation7 = new Reservation({
              user: pepito._id,
              workspace: office6._id,
              date: new Date("10/25/2022"),
            });

            return Promise.all([
              reservation1.save(),
              reservation2.save(),
              reservation3.save(),
              reservation4.save(),
              reservation5.save(),
              reservation6.save(),
              reservation7.save(),
            ]);
          }
        );
      }
    );
  })
  .catch((error) => {
    console.log(`error: ${error.message}`);
  })
  .then(() => disconnect());

//npm run populate-inspect-cli
