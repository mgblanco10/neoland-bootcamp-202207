require("dotenv").config();
const {
  env: { MONGO_URL },
} = process;
const mongoose = require("mongoose");
const { connect, disconnect } = mongoose

const { User, Building, Workspace, Reservation } = require("./models");

connect(MONGO_URL)
//   .then(() => {
//     console.log(`db connected`);
//     return Promise.all([
//       User.deleteMany(),
//       Building.deleteMany(),
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
    const pobleNou = new Building({
      name: "pobleNou building",
      address: "Calle de Ramon Turró, 169, 08005",
      image:
        "https://st.hzcdn.com/simgs/pictures/despachos/neoland-oficinas-meepstudio-img~951131e60ea96431_4-9543-1-639b8cf.jpg",
    });

    const diagonal = new Building({
      name: "diagonal building",
      address: "Diagonal 444 Catalonia Barcelona, B 08037",
      image:
        " https://www.neoland.es/wp-content/uploads/2021/11/neoland-remoto-bootcamps-1.jpg",
    });

    return Promise.all([pobleNou.save(), diagonal.save()]).then(
      ([pobleNou, diagonal]) => {
        const office1 = new Workspace({
          building: pobleNou.id,
          name: "Office private 1",
          price: 100,
          image:
            "https://pcasistencia.com/wp-content/uploads/2018/07/513c1c6b5e6d006625511982fdb30d2c.jpg",
          description: "Ideal for individuals and small teams.",
        });

        const office2 = new Workspace({
          building: pobleNou.id,
          name: "Suite",
          price: 100,
          image:
            "https://pcasistencia.com/wp-content/uploads/2018/07/513c1c6b5e6d006625511982fdb30d2c.jpg",
          description: "Capacity for a maximum of 20 people.",
        });

        const office3 = new Workspace({
          building: diagonal.id,
          name: "community office",
          price: 100,
          image:
            "https://pcasistencia.com/wp-content/uploads/2018/07/513c1c6b5e6d006625511982fdb30d2c.jpg",
          description: "Enjoy shared services and meeting rooms.",
        });

        const office4 = new Workspace({
          building: diagonal.id,
          name: "living room",
          price: 100,
          image:
            "https://www.profesionalreview.com/wp-content/uploads/2020/06/Ordenador-en-el-suelo-o-en-la-mesa-03-scaled.jpg",
          description: "Fully equipped private office space.",
        });

        const office5 = new Workspace({
          building: diagonal.id,
          name: "desk",
          price: 100,
          image:
            "https://habitarehome.es/185-large_default/mesa-de-escritorio-en-angulo-roma.jpg",
          description: "Enjoy shared services and meeting rooms.",
        });

        const office6 = new Workspace({
          building: diagonal.id,
          name: "living room2",
          price: 100,
          image:
            "https://www.profesionalreview.com/wp-content/uploads/2020/06/Ordenador-en-el-suelo-o-en-la-mesa-03-scaled.jpg",
          description: "Fully equipped private office space.",
        });

        const office7 = new Workspace({
          building: diagonal.id,
          name: "desk3",
          price: 100,
          image:
            "https://habitarehome.es/185-large_default/mesa-de-escritorio-en-angulo-roma.jpg",
          description: "Enjoy shared services and meeting rooms.",
        });

        const office8 = new Workspace({
          building: diagonal.id,
          name: "desk3",
          price: 100,
          image:
            "https://habitarehome.es/185-large_default/mesa-de-escritorio-en-angulo-roma.jpg",
          description: "Enjoy shared services and meeting rooms.",
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
// exec error

//TODO

// const reservation7 = new Reservation({
//     _user: james.id,
//     get user() {
//         return this._user
//     },
//     set user(value) {
//         this._user = value
//     },
//     workspace: office5.id,
//     date: 10/10/2022,
//     createdAt: 12/06/2021,
// })
//exec error.code
