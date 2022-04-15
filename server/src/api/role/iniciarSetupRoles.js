import roleModel from "./roleModel";

export const createdSetupRoles = async () => {
  try {
    const count = await roleModel.estimatedDocumentCount();
    if (count > 0) return;

    // Promise.all es para ejecutar todo un conjunto de  promesas que necesitan await
    const values = await Promise.all([
      new roleModel({ name: "user" }).save(),
      new roleModel({ name: "admin" }).save(),
      new roleModel({ name: "senales" }).save(),
    ]);
    console.log(values);


    //SEGUNDA FORMA DE HACER
    // await new roleModel({ name: "user" }).save();
    // await new roleModel({ name: "admin" }).save();
    // await new roleModel({ name: "senales" }).save();
  } catch (err) {
    console.log(err);
  }
};

