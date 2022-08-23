/** @jsx jsx */
import { jsx, Box, Button, Container, Image,Text } from 'theme-ui';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { rgba } from 'polished';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import uber from 'assets/images/clients/uber.png';
import google from 'assets/images/clients/google.png';
import paypal from 'assets/images/clients/paypal.png';
import microsoft from 'assets/images/clients/microsoft.png';
import dribbble from 'assets/images/clients/dribbble.png';


const Clients = () => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting...');
  };


  return (<>
    <Box id="clients" as="section" sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Text as="p" sx={styles.desc}>
              E ai, que tal conversarmos um pouco para tirarmos esse projeto do papel, hein?.
            </Text>
            <Box as="form" onSubmit={handleSubmit}>
             
              <Button type="submit" sx={styles.button} variant="primary">
                Clique aqui e chama a gente no whatsapp
              </Button>
            </Box>
          </Box>
        </Box>
    {/*<Box id="clients" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Meet Our Clients"
          title="Conheça os parceiros que acreditam no nosso projeto."
        />
        <Slider sx={styles.clients} {...settings}>
          {clients?.map((client) => (
            <Box key={client.id} as="figure" sx={styles.logo}>
              <Image loading="lazy" src={client.logo} alt={client.name} />
            </Box>
          ))}
        </Slider>
      </Container>
          </Box>*/}
  </>);
};

export default Clients;

const styles = {
  
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: "50vh",
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
    maxWidth: ["100%", null, null, 600, 500, null, 650],
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
    m: ['0 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 65px',
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
