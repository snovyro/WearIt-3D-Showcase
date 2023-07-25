import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Stage } from "@react-three/drei";

function App() {
  const [baju, setSlug] = useState("Kaos Putih Polos");
  const [size, setSize] = useState("S");
  const [body, setBody] = useState("NPB");

  const ModelL = () => {
    const gltf = useGLTF(`/${baju}/${body}_UKURAN_${size}.glb`);
    return <primitive object={gltf.scene} />;
  };

  const handleChangeBaju = (e) => {
    setSlug(e.target.value);
  };

  const handleChangeSize = (e) => {
    setSize(e.target.value);
  };

  const handleChangeBody = (e) => {
    setBody(e.target.value);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ paddingLeft: "20px" }}>
          <span>Pilih Baju:</span>
          <select
            onChange={handleChangeBaju}
            style={{ padding: "5px", margin: "1rem" }}
          >
            <option value="Kaos Putih Polos">Kaos Putih Polos</option>
            <option value="Kemeja Garis">Kemeja Garis</option>
            <option value="Sweater">Sweater</option>
          </select>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <span>Pilih Ukuran:</span>
          <select
            onChange={handleChangeSize}
            style={{ padding: "5px", margin: "1rem" }}
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <div style={{ paddingLeft: "20px" }}>
          <span>Pilih Jenis Badan:</span>
          <select
            onChange={handleChangeBody}
            style={{ padding: "5px", margin: "1rem" }}
          >
            <option value="NPB">Normal, Pendek, Buncit</option>
            <option value="NPTB">Normal, Pendek, Tidak Buncit</option>
            <option value="NSB">Normal, Sedang, Buncit</option>
            <option value="NSTB">Normal, Sedang, Tidak Buncit</option>
            <option value="NTB">Normal, Tinggi, Buncit</option>
            <option value="NTTB">Normal, Tinggi, Tidak Buncit</option>
            <option value="OWPB">Overweight, Pendek, Buncit</option>
            <option value="OWPTB">Overweight, Pendek, Tidak Buncit</option>
            <option value="OWSB">Overweight, Sedang, Buncit</option>
            <option value="OWSTB">Overweight, Sedang, Tidak Buncit</option>
            <option value="OWTB">Overweight, Tinggi, Buncit</option>
            <option value="OWTTB">Overweight, Tinggi, Tidak Buncit</option>
            <option value="UWPB">Underweight, Pendek, Buncit</option>
            <option value="UWPTB">Underweight, Pendek, Tidak Buncit</option>
            <option value="UWSB">Underweight, Sedang, Buncit</option>
            <option value="UWSTB">Underweight, Sedang, Tidak Buncit</option>
            <option value="UWTB">Underweight, Tinggi, Buncit</option>
            <option value="UWTTB">Underweight, Tinggi, Tidak Buncit</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          width: "100vw",
          backgroundColor: "#202020",
        }}
      >
        <div
          style={{
            height: "80vh",
            width: "90vw",
          }}
        >
          <Canvas
            key="canvas-l"
            dpr={[1, 1]}
            shadows
            camera={{ fov: 45, position: [90, 90, 90] }}
          >
            <color attach="background" args={["#EB455F"]} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Stage environment={null}>
              <ModelL scale={0.01} />
            </Stage>
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    </>
  );
}

export default App;
