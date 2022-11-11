import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
  } from "react";
  import { useNavigate } from 'react-router-dom'
  import Globe from "react-globe.gl";
  import * as THREE from "three";
  import clouds from "./globe/clouds.png";
  import bump from "./globe/bump-large.jpg";
  import { Home } from '../home/home.jsx';
  import {Link} from "react-router-dom";
import { University } from "../universities/university";


  //refered: https://codesandbox.io/s/react-globegl-4snxx?file=/src/App.js

  export default function Map() {
    const globeEl = useRef();
    const [countries, setCountries] = useState({ features: [] });
    const [hover, setHover] = useState();
    const [rotation, setRotation] = useState(true);
    const [hoverD, sethoverD] = useState();

  

    useEffect(() => {
      fetch(
        "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
      )
        .then((res) => res.json())
        .then((countries) => {
          setCountries(countries);
        });
    }, []);
  
    useEffect(() => {
      // const renderer = globeEl.current.renderer();
      // renderer.alpha = true;
      // renderer.antialias = true;
  
      setTimeout(() => {
        const geometry = new THREE.SphereBufferGeometry(100, 75, 75);
        const material = new THREE.MeshPhongMaterial();
  
        new THREE.TextureLoader().load({clouds}, (texture) => {
          material.map = texture;
          material.transparent = true;
          material.opacity = 0.1;
        });
  
        const mesh = new THREE.Mesh(geometry, material);
  
        mesh.scale.set(1.015, 1.015, 1.015);
  
        const scene = globeEl.current.scene();
        // scene.add(mesh);
      });
    }, []);
  
    useEffect(() => {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 2;
  
      globeEl.current.pointOfView({ altitude: 1.8 },2000);
  
      // globeEl.current.controls().update();
    }, [rotation]);
  
    const onHoverHandler = useCallback((polygon) => {
      if (polygon !== null) {
        setHover(polygon.properties.ISO_A3);
        // setRotation(false);
        globeEl.current.controls().autoRotate = false;
      } else {
        setHover(null);
        // setRotation(true);
        globeEl.current.controls().autoRotate = true;
      }
    }, []);
  
    const globeMaterial = useMemo(() => {
      const globeMaterialTemp = new THREE.MeshPhongMaterial();
      globeMaterialTemp.bumpScale = 18;
  
      new THREE.TextureLoader().load({bump}, (texture) => {
        globeMaterial.bumpMap = texture;
      });
  
      return globeMaterialTemp;
    }, []);

    const navigate = useNavigate();

    const onclicker = (a) =>
    {
      navigate("/University", {state : {country : a}})
    }
    // const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);
    // const maxVal = useMemo(
    //     () => Math.max(...countries.features.map(getVal)),
    //     [countries]
    //   );
    // colorScale.domain([0, maxVal]);
    // const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
      
    return (
      <Globe
        ref={globeEl}
        globeImageUrl="https://unpkg.com/three-globe@2.24.8/example/img/earth-blue-marble.jpg"
        backgroundImageUrl = "https://unpkg.com/three-globe@2.24.8/example/img/night-sky.png"
        // bumpImageUrl="/bump-large.jpg"
        globeMaterial={globeMaterial}
        polygonsData={countries.features.filter(
          (d) => d.properties.ISO_A2 !== "AQ"
        )}
        polygonAltitude={(d) => d === hoverD ? 0.08 : 0.01}
        polygonStrokeColor={()=> '#111'}
        polygonSideColor = {() => "rgba(0, 0, 0,1)"}
        polygonCapColor={(d) =>
          d.properties.ISO_A3 === hover
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(255, 235, 205, 0.2)"
        }
        polygonLabel={({properties : d}) => `<b>${d.ADMIN}</b><br/>`}
        onPolygonClick={({properties:d})=> onclicker(d.ADMIN)}
        onPolygonHover={onHoverHandler}
      />
    );
  }
  