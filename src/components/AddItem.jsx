import React, { useState } from "react";

const AddItem = ({ onAddItem }) => {
   const [name, setName] = useState("");
   const [endDate, setEndDate] = useState("");
   const [startingPrice, setStartingPrice] = useState("");
   const [buyNowPrice, setBuyNowPrice] = useState("");
   const [selectedFile, setSelectedFile] = useState(null);
   const [previewImage, setPreviewImage] = useState(null);

   const handleSubmit = (event) => {
      event.preventDefault();

      // Input validation can be added here

      const formData = new FormData();
      formData.append("name", name);
      formData.append("endDate", endDate);
      formData.append("startingPrice", startingPrice);
      formData.append("buyNowPrice", buyNowPrice);
      formData.append("image", selectedFile);

      onAddItem(formData);

      setName("");
      setEndDate("");
      setStartingPrice("");
      setBuyNowPrice("");
      setSelectedFile(null);
      setPreviewImage(null);
   };

   const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);

      if (file) {
         const reader = new FileReader();
         reader.onload = (e) => setPreviewImage(e.target.result);
         reader.readAsDataURL(file);
      } else {
         setPreviewImage(null);
      }
   };

   return (
      <div className="form-container">
         <h1>Add your Item</h1>
         <form onSubmit={handleSubmit} style={styles.form}>
            <label htmlFor="name">Item Name:</label>
            <input
               type="text"
               id="name"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
               style={styles.input}
            />
            <label htmlFor="endDate">End Date (YYYY-MM-DD):</label>
            <input
               type="date"
               id="endDate"
               value={endDate}
               onChange={(e) => setEndDate(e.target.value)}
               required
               style={styles.input}
            />
            <label htmlFor="startingPrice">Starting Price:</label>
            <input
               type="number"
               id="startingPrice"
               value={startingPrice}
               onChange={(e) => setStartingPrice(e.target.value)}
               required
               style={styles.input}
            />
            <label htmlFor="buyNowPrice">Buy Now Price:</label>
            <input
               type="number"
               id="buyNowPrice"
               value={buyNowPrice}
               onChange={(e) => setBuyNowPrice(e.target.value)}
               style={styles.input}
            />
            <label htmlFor="image">Item Photo:</label>
            <input type="file" id="image" accept="image/*" onChange={handleFileChange} style={styles.input} />
            {previewImage && <img src={previewImage} alt="Preview" style={styles.previewImage} />}
            <button type="submit" style={styles.button}>
               Add Item
            </button>
         </form>
      </div>
   );
};

const styles = {
   form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "15px",
      backgroundColor: "#E3FEF7",
      borderRadius: "10px",
      border: "2px solid #135D66",
      width: "fit-content",
   },
   input: {
      padding: "10px",
      border: "1px solid #135D66",
      borderRadius: "10px",
   },
   button: {
      padding: "10px 20px",
      backgroundColor: "#003C43",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      width: "fit-content",
      alignSelf: "center",
   },
   previewImage: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      marginBottom: "10px",
   },
};

export default AddItem;
