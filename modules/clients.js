import { ObjectId } from "mongodb";
import { Connection } from "../connection.js";

const DB = () => Connection.db;

class Client {
  static async getClientInfo(req, res) {
    try {
      const users = await DB().collection("users").find().toArray();
      res.status(200).send(JSON.stringify(users));
    } catch (exception) {
      console.error(exception.message);
      res.status(500).send();
    }
  }
  static async updateClientData(req, res) {
    try {
      // await DB().collection("users").deleteMany();
      await DB()
        .collection("users")
        .insertMany([
          {
            firstName: "Anar",
            lastName: "Mamedovi",
            email: "anar.mamedov2402@gmail.com",
            gender: "male",
            dateOfBirth: "2000-02-24",
            telNumber: "995599313050",
            country: "Georgia",
            city: "Gardabani",
            pass: "123456789",
          },
          {
            firstName: "Nino",
            lastName: "oniani",
            email: "nino.oniani@gmail.com",
            gender: "female",
            dateOfBirth: "1996-07-04",
            telNumber: "995598000000",
            country: "Georgia",
            city: "Tbilisi",
            pass: "12345678",
          },
          {
            firstName: "Beka",
            lastName: "Makalatia",
            email: "giorgi.makalatia007@gmail.com",
            gender: "male",
            dateOfBirth: "2001-09-28",
            telNumber: "995595000000",
            country: "Georgia",
            city: "Abaha",
            pass: "12345678910",
          },
        ]);
    } catch (exception) {
      console.error(exception.message);
      res.status(500).send();
    }
  }
  static async registerUser(req, res, params) {
    try {
      await DB()
        .collection("users")
        .updateOne(
          { _id: ObjectId(params._id) },
          {
            $set: {
              firstName: params.firstName,
              lastName: params.lastName,
              email: params.email,
              gender: params.gender,
              dateOfBirth: params.dateOfBirth,
              telNumber: params.telNumber,
              country: params.country,
              city: params.city,
              pass: params.pass,
            },
          },
          { upsert: true }
        );
      res.status(200).send({
        success: true,
        message: "success to post data",
        ...params,
      });
    } catch (error) {
      res.status(500).send({ error: true });
    }
  }
  static async deleteUser(req, res, params) {
    try {
      await DB()
        .collection("users")
        .deleteOne({ _id: ObjectId(params._id) });
      res.status(200).send({
        success: true,
        message: "Deleted the user, success to delete data",
      });
    } catch (error) {
      res.status(500).send({ error: true, message: error.message });
    }
  }

  // chat
  static async getMessages(req, res) {
    try {
      const users = await DB().collection("messages").find().toArray();
      res.status(200).send(JSON.stringify(users));
    } catch (exception) {
      console.error(exception.message);
      res.status(500).send();
    }
  }
  static async saveMessage(req, res, params) {
    try {
      await DB().collection("messages").insertOne({
        senderId: params.senderId,
        senderFirstName: params.senderFirstName,
        senderLastName: params.senderLastName,
        receiverId: params.receiverId,
        receiverFirstName: params.receiverFirstName,
        receiverLastName: params.receiverLastName,
        message: params.message,
      });
      res.status(200).send({
        success: true,
        message: "success to post data",
        ...params,
      });
    } catch (error) {
      res.status(500).send({ error: true });
    }
  }
}

export { Client };
