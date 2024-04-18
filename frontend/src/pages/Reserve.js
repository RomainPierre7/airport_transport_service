import React from 'react';

const Reserve = () => {
  return (
    <div>
      <h1>Réservation</h1>
      <p>Utilisez ce formulaire pour réserver votre place :</p>
      {/* Formulaire de réservation */}
      <form>
        <label>
          Nom :
          <input type="text" name="name" />
        </label>
        <label>
          Email :
          <input type="email" name="email" />
        </label>
        <label>
          Date de réservation :
          <input type="date" name="date" />
        </label>
        <button type="submit">Réserver</button>
      </form>
    </div>
  );
};

export default Reserve;
