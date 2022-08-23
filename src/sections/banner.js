/** @jsx jsx */
import { jsx, Box, Container, Heading,  } from 'theme-ui';
import { rgba } from 'polished';
import { FaArrowDown } from 'react-icons/fa';
import { NavLink } from 'components/link';
import mapMarker from 'assets/images/icons/map-marker.png';
import {useState,useEffect, } from 'react'

const options = [
  {
    id: 1,
    label: 'Brooklyn, New york',
    value: 'Brooklyn, New york',
  },
  {
    id: 2,
    label: 'Atlanta, Georgia',
    value: 'Atlanta, Georgia',
  },
  {
    id: 3,
    label: 'Minneapolis, Minnesota',
    value: 'Minneapolis, Minnesota',
  },
  {
    id: 4,
    label: 'Chicago, Illinois',
    value: 'Chicago, Illinois',
  },
];


export default function Banner() {
  

  const [text, setText] = useState('');
  const [original, setOriginal] = useState('Venha realizar o sonho da sua construção');
  function changeText(){
    let textos = [
      "Venha realizar o sonho da sua construção",
      "Vamos juntos tirar esse projeto do papel",
      "A construtora Santa Rita tem o melhor para você!",
      "Conheça nossos planos e vamos fazer um excelente negócio."
    ]
    let valor = sessionStorage.getItem("valor") ? sessionStorage.getItem("valor") : 1;
    setTimeout(()=>{
      setOriginal(textos[valor])
      valor++;
      if(valor > 3) valor = 0;
      sessionStorage.setItem("valor",valor)
    
    },3000);
    
    
    
  }
  
  
  const typeWriter = (text, i = 0) => {
    if (i < original.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        typeWriter(text, i + 1);
      }, 75);
    }else{
  
      changeText();
    }
  };

  useEffect(() => {
    typeWriter(original);
  }, [original]);

  

  return (<>
       
    <Box as="section" id="home" sx={styles.section}>
        <video src={"/videobg.mp4"} loop muted autoPlay sx={styles.video} />
      <Container>
        <Box sx={styles.contentWrapper}>
            <Heading as="h1" sx={styles.heroTitle}>
              {text}
            </Heading>
        </Box>
        <NavLink path={"clients"} label={<FaArrowDown sx={styles.arrow}/>}/>
        
      </Container>
     
    </Box>
 </> );
}

const styles = {
  video:{
    objectFit:"cover",
    position:"absolute",
    width:"100%",
    height:"100%",
    filter: "brightness(0.5)"
  },
  bg:{
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100vw",
      height: "100vh",
      transform: "translate(-50%, -50%)",
    
  },
  section: {
    height: "100vh",
    background: `no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: ["100vh", null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    position:"absolute",
    backgroundColor: rgba('#fff', 0.93),
    boxShadow: [
      '0px 10px 16px rgba(52, 61, 72, 0.12)',
      null,
      null,
      null,
      'none',
    ],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: [
      '20px',
      '30px',
      null,
      null,
      null,
      '30px 50px 60px',
      '50px 60px 90px',
    ],
    borderRadius: 5,
    m: ['300% 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 65px',
    },
  },
  arrow:{
    position:"absolute",
    fontSize:103,
    animation: "anima 750ms infinite alternate",
    margin:0,
    top: "82%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    filter:"drop-shadow(0px 0px 10px #ccc)"
  },
  heroTitle: {
    position:"absolute",
    fontSize: [56, 28, 28, "103px !important", , 5, 6],
    fontWeight: 700,
    maxWidth:["100%", , , "45%", , , ],
    textShadow:"#fff 2px -2px, #fff -2px 2px, #fff 2px 2px, #fefefe -2px -2px",
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, "1.1 !important", null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: "103px !important",
    },
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, 1.53, 1.53, 2, 2.4, 2, 2.48],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 15,
    },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: ['auto', 'auto', 'initial'],
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};
