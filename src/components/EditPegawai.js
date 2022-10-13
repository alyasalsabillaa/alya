import React, { useState } from "react";
import { useDispatch } from 'react-redux'; 

const EditPegawai = () => {
  const [nama, setNama] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [id, setId] = useState(""); 
  const dispatch = useDispatch(); 

  return (
    <div>
      <form className="box mt-5">
        <div className="field">
          <label className="label">Nama</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Nama" 
            value={nama} 
            onChange={(e) => setNama(e.target.value)} 
            /> 
          </div>
        </div>
        <div className="field">
          <label className="label">Provinsi</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Provinsi" 
            value={provinsi} 
            onChange={(e) => setProvinsi(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Kabupaten</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Kabupaten" 
            value={kabupaten} 
            onChange={(e) => setKabupaten(e.target.value)}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Kecamatan</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Kecamatan" 
            value={kecamatan} 
            onChange={(e) => setKecamatan(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Kelurahan</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Kelurahan" 
            value={kelurahan} 
            onChange={(e) => setKelurahan(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">ID</label>
          <div className="control">
            <input type="text" className="input" 
            placeholder="Id" 
            value={id} 
            onChange={(e) => setId(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-success">Update</button>
        </div>
      </form>
    </div>
  ); 
}; 
export default EditPegawai; 
