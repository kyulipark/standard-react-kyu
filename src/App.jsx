import { useState } from "react";

import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [goldInput, setGoldInput] = useState(0);
  const [silverInput, setSilverInput] = useState(0);
  const [bronzeInput, setBronzeInput] = useState(0);

  //국가 추가
  const addCountry = (e) => {
    e.preventDefault();
    const exCountry = countries.find((country) => {
      if (country.name === countryInput) {
        return true;
      } else {
        return false;
      }
    });
    if (exCountry) {
      alert("이미 등록된 국가입니다.");
    } else {
      const newCountry = {
        name: countryInput,
        gold: goldInput,
        silver: silverInput,
        bronze: bronzeInput,
      };
      setCountries([...countries, newCountry]);
    }
  };

  //업데이트
  const updateCountry = (e) => {
    e.preventDefault();
    const exCountry = countries.find((country) => {
      if (country.name === countryInput) {
        return true;
      } else {
        return false;
      }
    });

    if (exCountry) {
      setCountries(
        countries.map((country) => {
          if (country.name === countryInput) {
            return {
              name: countryInput,
              gold: goldInput,
              silver: silverInput,
              bronze: bronzeInput,
            };
          } else {
            return country;
          }
        })
      );
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  };

  //삭제
  const deleteCountry = (name) => {
    setCountries(
      countries.filter((country) => {
        if (country.name !== name) {
          return country;
        }
      })
    );
    alert(`${name}이 삭제되었습니다.`);
  };

  return (
    <div className="main-container">
      <h1>2024 올림픽 메달</h1>
      <form className="input-group" onSubmit={addCountry}>
        <div className="input-field">
          <label>국가명</label>
          <input
            onChange={(e) => {
              setCountryInput(e.target.value);
              type = "text";
              placeholder = "국가 입력";
              required;
            }}
          />

          {/* <div className="input-field"> */}
          <label>금메달</label>
          <input
            onChange={(e) => {
              setGoldInput(e.target.value);
            }}
            type="number"
            placeholder="0"
          />

          <label>은메달</label>
          <input
            onChange={(e) => {
              setSilverInput(e.target.value);
            }}
            type="number"
            placeholder="0"
          />

          <label>동메달</label>
          <input
            onChange={(e) => {
              setBronzeInput(e.target.value);
            }}
            type="number"
            placeholder="0"
          />
          <button className="btn" type="submit">
            국가 추가
          </button>
          <button className="btn" onClick={updateCountry}>
            업데이트
          </button>
        </div>
      </form>

      <table className="table">
        <thead className="thead">
          <tr>
            <td>국가명</td>
            <td>금메달</td>
            <td>은메달</td>
            <td>동메달</td>
          </tr>
        </thead>

        <tbody>
          {countries.map((country) => {
            return (
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <td
                  className="delbtn"
                  type="button"
                  onClick={() => deleteCountry(country.name)}
                >
                  삭제
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
