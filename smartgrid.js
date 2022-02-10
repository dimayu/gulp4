let smartgrid = require('smart-grid');

let settings = {
   outputStyle: 'less',
   columns: 12,
   offset: '30px',
   mobileFirst: false,
   container: {
      maxWidth: '1200px',
      fields: '10px'
   },
   breakPoints: {
      xld: {
         width: '1800px',
         fields: '100px'
      },
      ld: {
         width: '1140px',
         fields: '50px'
      },
      md: {
         width: '940px',
         fields: '15px'
      },
      sm: {
         width: '780px',
         fields: '10px'
      },
      xxs: {
         width: '440px',
         fields: '10px'
      }
   }
};

smartgrid('./app/less', settings);



/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */