import React from "react";
import { useState } from "react";

const Input = (countries, setCountries) => {
  const [countryInput, setCountryInput] = useState("");
  const [goldInput, setGoldInput] = useState(0);
  const [silverInput, setSilverInput] = useState(0);
  const [bronzeInput, setBronzeInput] = useState(0);
  //국가 추가
  const addCountry = (e) => {
    if (checkCountry(e)) {
      alert("이미 등록된 국가입니다.");
    } else {
      const newCountry = {
        name: countryInput,
        gold: goldInput ? parseInt(goldInput) : 0,
        silver: silverInput ? parseInt(silverInput) : 0,
        bronze: bronzeInput ? parseInt(bronzeInput) : 0,
      };
      setCountries([...countries, newCountry].sort((a, b) => b.gold - a.gold));
    }
    setCountryInput("");
    setGoldInput("0");
    setSilverInput("0");
    setBronzeInput("0");
  };

  const checkCountry = (e) => {
    e.preventDefault();
    return countries.find((country) => {
      if (country.name === countryInput) {
        return true;
      } else {
        return false;
      }
    });
  };
  //업데이트
  const updateCountry = (e) => {
    if (checkCountry(e)) {
      setCountries(
        countries
          .map((country) => {
            if (country.name === countryInput) {
              return {
                name: country.name,
                gold: goldInput,
                silver: silverInput,
                bronze: bronzeInput,
              };
            } else {
              return country;
            }
          })
          .sort((a, b) => b.gold - a.gold)
      );
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  };
  return (
    <form className="input-group" onSubmit={addCountry}>
      <div className="input-field">
        <label>국가명</label>
        <input
          onChange={(e) => {
            setCountryInput(e.target.value);
            type = "text";
            value = { countryInput };
            placeholder = "국가 입력";
          }}
          required
        />
      </div>

      <div className="input-field">
        <label>금메달</label>
        <input
          onChange={(e) => {
            setGoldInput(e.target.value);
          }}
          type="number"
          value={goldInput}
          placeholder="0"
        />
      </div>
      <div className="input-field">
        <label>은메달</label>
        <input
          onChange={(e) => {
            setSilverInput(e.target.value);
          }}
          type="number"
          value={silverInput}
          placeholder="0"
        />
      </div>
      <div className="input-field">
        <label>동메달</label>
        <input
          onChange={(e) => {
            setBronzeInput(e.target.value);
          }}
          type="number"
          value={bronzeInput}
          placeholder="0"
        />
      </div>
      <button className="btn" type="submit">
        국가 추가
      </button>
      <button className="btn" onClick={updateCountry}>
        업데이트
      </button>
    </form>
  );
};

export default Input;
