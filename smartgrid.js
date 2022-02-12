let smartgrid = require('smart-grid');

let settings = {
   outputStyle: 'less',
   columns: 12,
   offset: '24px',
   mobileFirst: false,
   container: {
      maxWidth: '1280px',
      fields: '40px'
   },
   breakPoints: {
      lmd: {
         width: '1200px',
         fields: '15px'
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