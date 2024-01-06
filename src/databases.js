import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "123",
    database: "foodiee",
  })
  .promise();

export async function createUser(
  Name,
  UserName,
  Password,
  PhoneNo,
  Email,
  UserType,
  AddressLine1,
  AddressLine2,
  City,
  State,
  PostalCode,
  Country
) {
  const result = await pool.query(
    "INSERT INTO Users (Name, UserName,Password, PhoneNo, Email, UserType,AddressLine1,AddressLine2,City,State,PostalCode, Country) VALUES  (?, ?,  ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      Name,
      UserName,
      Password,
      PhoneNo,
      Email,
      UserType,
      AddressLine1,
      AddressLine2,
      City,
      State,
      PostalCode,
      Country,
    ]
  );
  return result;
}



export async function createShopkeeper(
  Name,
  ShopUserName,
  Password,
  Email,
  PhoneNo,
  ShopName,
  ShopNo,
  BankName,
  AccountNo,
  GSTNo,
  GovIDType,
  GovID,
  AddressLine1,
  AddressLine2,
  City,
  State,
  PostalCode,
  Country
) {
  const result = await pool.query(
    "INSERT INTO Shopkeepers (Name,ShopUserName,Password,Email,PhoneNo,ShopName, ShopNo, BankName,AccountNo, GSTNo, GovIDType, GovID,AddressLine1,AddressLine2,City,State,PostalCode, Country) VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [
      Name,
      ShopUserName,
      Password,
      Email,
      PhoneNo,
      ShopName,
      ShopNo,
      BankName,
      AccountNo,
      GSTNo,
      GovIDType,
      GovID,
      AddressLine1,
      AddressLine2,
      City,
      State,
      PostalCode,
      Country,
    ]
  );
  return result;
}

export async function createDeliveryBoy(
    UserName,
    Name,
    Password,
    PhoneNo,
    GovIDType,
    GovID,
    BankName,
    AccountNo,
  ) {
    const result = await pool.query(
      "INSERT INTO DeliveryBoys (UserName,Name,Password,PhoneNo,GovIDType,GovID,BankName,AccountNo ) VALUES  (?, ?, ?,  ?,?,?,?,?  )",
      [
        UserName,
        Name,
        Password,
        PhoneNo,
        GovIDType,
        GovID,
        BankName,
        AccountNo,
      ]
    );
    return result;
  }

  export async function showUser() {
    const [row] = await pool.query("SELECT * FROM Users");
    return row;
  }

  export async function showShopkeeper() {
    const [row] = await pool.query("SELECT * FROM Shopkeepers");
    return row;
  }

  export async function showDeliveryBoy() {
    const [row] = await pool.query("SELECT * FROM DeliveryBoys");
    return row;
  }









// export async function getNotes() {
//   const [row] = await pool.query("SELECT * FROM notes");
//   return row;
// }

// export async function getNote(id) {
//   const [row] = await pool.query("SELECT * FROM notes WHERE id = ?", [id]);
//   return row[0];
// }

// export async function createNote(title, content) {
//   const [row] = await pool.query(
//     "INSERT INTO notes (title, content) VALUES (?, ?)",
//     [title, content]
//   );
//   const result = await getNote(row.insertId);
//   return result;
// }

// createUser("Rat", "rat", "123", "123", "anaty@femlae", "Customer", " Durg", "Punjab", "Dubai", "Uttar", "20", "India");
// createDeliveryBoy("Rat","Bola","123","123","Aadhar","123","SBI","123456789");
// createShopkeeper("Sharukh","Sharukh","123","sharukh@male","123","Sharukh","123","SBI","123456789","123456789","Aadhar","123","Durg","Punjab","Dubai","Uttar","20","India");
