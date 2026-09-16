import { Box, Typography, Button, Divider, IconButton, Collapse, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import SchoolIcon from '@mui/icons-material/School';

const AdvisorContent = () => {
    
    
    //const [boardType, setBoardType] = useState('current');
    //const handleBoardTypeChange = (event, newBoardType) => {
    //if (newBoardType !== null) {
    //    setBoardType(newBoardType);
    //}
    //};

    const advisors = [
        { 
            name: 'Dr. Ericcson Santa Marin',
            image: '/MarinProfile.png',
            message: 'Ericcson Santa Marin is an Assistant Professor in the Computer Science Department at California State Polytechnic University - Pomona (Cal Poly Pomona). He earned a B.S. in Computer Science from Pontifical Catholic University of Goias, Brazil (2001), an especialization in Software Quality Assurance and Management from Pontifical Catholic University of Goias, Brazil (2013), a M.S. in Computer Science from Federal University of Goias, Brazil (2013), and a Ph.D. in Computer Science from Arizona State University, USA (2020), where he proposed a hacker-centric perspective to empower cyber-defense. After defending his Ph.D. dissertation in April 2020, he joined Cal Poly Pomona in Fall 2020. He has also worked from 2001 until 2010 in his own software factory Marin Solutions, where his team designed custom-built, requirements-oriented, high-performance software solutions for different type of companies.',
            research: {
                focus: 'AI for Threat Intelligence (ATI)',
                opportunities: 'CALSys Lab',
                researchLink: 'https://www.cpp.edu/calsys/index.shtml',
            },
            contact: {
                email: 'santanamarin@cpp.edu',
                location: 'Building 8-39',
                phone: '909-869-3909',
            },
            // Add more details about Dr. Ericcson Santa Marin
            /* 
            photos, bios
            Their research areas & opportunities / expertise
            Contact information and/or office hours
            */
        },
        {
            name: 'John Korah',
            image: 'KorahProfile.png',
            message: 'John Korah is an Assistant Professor with the Department of Computer Science at Cal Poly Pomona. He received his Ph.D. in Computer Science from Virginia Tech, M.S. in Electrical Engineering and B.E. in Electronics and Instrumentation Engineering - Government College of Technology Coimbatore, India.',
            research: {
                focus: 'High Performance Computing, Health Policy Modeling, Big Data Analytics, Cyber Security, Computational Social Systems, Performance Modeling & Analysis',
                opportunities: 'Contact via email for more information',
                researchLink: 'Contact via email for research opportunities',
            },
            contact: {
                email: 'jkorah@cpp.edu',
                location: 'Building 8-15',
                phone: '909-869-3441',
            },
        },
        {
            name: 'Sai Kosaraju',
            image: 'KosarajuProfile.png',
            message: 'Sai Kosaraju is an Assistant Professor in the Department of Computer Science at Cal Poly Pomona. He received his Ph.D in Computer Science from University of Nevada, Las Vegas, researching deep learning in healthcare. He earned his M.S. in Computer Science from Kennesaw State University, and Bachelor\'s in Electronics and Communication from GITAM Institute of Technology, Vishakapatnam, India. His work mainly focuses on Deep Learning, specifically Interpretable and Evidential Deep Learning.',
            research: {
                focus: 'Health Informatics, Bioinformatics, Machine Learning, Deep Learning',
                opportunities: 'Contact via email for more information',
                researchLink: 'Contact via email for research opportunities',
            },
            contact: {
                email: 'skosaraju@cpp.edu',
                location: 'Building 8-46',
                phone: '909-869-3542',
            },
        } 

    ]; 
    // Create Cards/Boxes for each advisor with their information
    
  //const AdvisorCard = ({ advisor }) => {
   //const [open, setOpen] = useState(false);

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Grid container spacing={4}>
        
        {advisors.map((advisor, index) => (

            <Grid item xs={12} md={4} key={index}>
              <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}>

            <Box
                sx={{
                p: 4,
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: "background.paper",
                height: "100%", 
                color: "white"
                 
                }}
            >
              <Box
                sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 3, md: 5 },}}>
                <Box>
                  <Box
                    component="img"
                    src={advisor.image}
                    alt={advisor.name}
                    sx={{
                      width: 120,
                      height: 120,
                      objectFit: "cover",
                      borderRadius: 2,
                    }}
                  />
                </Box>

                  <Box sx={{ flex: 1 }}>

                  <Typography variant="h6">
                      {advisor.name}
                  </Typography>

                  <Typography sx={{ mb: 2 }}>
                      {advisor.message}
                  </Typography>

                  <Button onClick={() => handleToggle(index)}>
                      {openIndex === index ? "Hide Details" : "View Details"}
                  </Button>

                  </Box>
                </Box>
                <Collapse in={openIndex === index}>

                <Box sx={{ 
                  mt: 3,
                  width: "100%",
                  overflowWrap: "break-word"
                }}>
                    
                    <Typography>
                    <strong>Research Focus:</strong> {advisor.research.focus}
                    </Typography>

                    <Typography>
                    <strong>Email:</strong> {advisor.contact.email}
                    </Typography>

                    <Typography>
                    <strong>Phone:</strong> {advisor.contact.phone}
                    </Typography>

                </Box>
                </Collapse>

            </Box>
            </motion.div>
            </Grid>

        ))}
        </Grid>
    );
    //};
};
/*
  return (
    <Box sx={{ py: 8 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={4}>
          {advisors.map((advisor) => (
            <Grid item xs={12} sm={6} md={4} key={advisor.id}>
              <AdvisorCard advisor={advisor} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );



    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };
        <Box sx={{ pb: 4, pt: 0 }}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                <motion.div variants={itemVariants}>
                    <Box sx={{ mb: 7.2 }}>
                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.6, ease: 'easeOut', delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3.6, justifyContent: 'center' }}>
                                <Box sx={accentBarSx} />
                                <Typography variant="h4" sx={sectionTitleSx}>
                                    What's Provided FREE for Participating Members
                                </Typography>
                            </Box>
                        </motion.div>
*/
/*
Wrapper:
<Grid container spacing={4}>
  {advisors.map((advisor) => (
    <Grid item xs={12} sm={6} md={4} key={advisor.id}>
      <AdvisorCard advisor={advisor} />
    </Grid>
  ))}
</Grid>

const AdvisorCard = ({ advisor }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div variants={itemVariants}>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: "background.paper",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={advisor.image}
            alt={advisor.name}
            sx={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
              mb: 2,
            }}
          />

          <Typography variant="h6">{advisor.name}</Typography>
          <Typography sx={{ mb: 2 }}>{advisor.message}</Typography>

          <Button onClick={() => setOpen(!open)}>
            {open ? "Hide Details" : "View Details"}
          </Button>
        </Box>

        <Collapse in={open}>
          <Box sx={{ mt: 3 }}>
            <Typography>
              <strong>Research Focus:</strong> {advisor.research.focus}
            </Typography>

            <Typography>
              <strong>Email:</strong> {advisor.contact.email}
            </Typography>
          </Box>
        </Collapse>
      </Box>
    </motion.div>
  );
};


*/
export default AdvisorContent;