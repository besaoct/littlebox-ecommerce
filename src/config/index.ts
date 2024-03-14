export const ALL_PRODUCTS= [
    {
      label: `Men's`,
      value: 'mens' as const,
      featured: [
        {
          name: 'Clothing',
          href: `/products?collection=mens-clothing`,
          value: 'clothing',
        },
        {
          name: 'Footwear',
          href: `/products?collection=mens-shoes`,
          value: 'footwear',
        },
       
       

 
      ],
    },
    {
      label: 'Clothing',
      value: 'shops' as const,
      featured: [
        {
            name: 'Tops',
            href: `/products?collection=mens-shoes`,
            value: 'merch',
       },

        {
          name: 'Matching Sets',
          href: `/products?collection=mens-shoes`,
          value: 'merch',
        },
    
    
          {
            name: 'Winter Wear',
            href: `/products?collection=mens-shoes`,
            value: 'creators',
          },   {
            name: 'Combos',
            href: `/products?collection=mens-shoes`,
            value: 'students',
          },  {
            name: 'Intimates',
            href: `/products?collection=mens-shoes`,
            value: 'campuses',
          },{
            name: 'Lingerie',
            href: `/products?collection=mens-shoes`,
            value: 'campuses',
          },{
            name: 'Athleisure',
            href: `/products?collection=mens-shoes`,
            value: 'campuses',
          },{
            name: 'Trousers',
            href: `/products?collection=mens-shoes`,
            value: 'campuses',
          },{
            name: 'Pick a mood',
            href: `/products?collection=mens-shoes`,
            value: 'campuses',
          },{
            name: 'Dresses',
            href: `/products?collection=mens-shoes`,
            value: 'campuses',
          },{
            name: 'Gropcore',
            href: `/products?collection=mens-shoes`,
            value: 'campuses',
          },{
            name: 'Hoodies & Sets',
            href: `/products?collection=mens-shoes`,
            value: 'campuses',
          },{
            name: 'Valentine Special',
            href: `/products?collection=mens-shoes`,
            value: 'campuses',
          },
      ],
    },
    {
      label: 'Footwear',
      value: 'footwear' as const,
      featured: [
        {
            name: 'Oxfords & Boots',
            href: `/products?collection=mens-shoes`,
            value: 'merch',
       },

        {
          name: 'Flats & Flatforms',
          href: `/products?collection=mens-shoes`,
          value: 'merch',
        },
    
    
          {
            name: 'Heels & Platforms',
            href: `/products?collection=mens-shoes`,
            value: 'creators',
          },  
      ],
    },
  ]

  export const HOME_PRODUCTS =[
    {
      label: 'Pick a Mood',
      value: 'pick-a-mood' as const,
      featured: [
        {
            name: 'Feeling Cozy',
            href: `/products?collection=feeling-cozy`,
            value: 'feeling-cozy',
       },

        {
          name: 'Feeling Free',
          href: `/products?collection=feeling-free`,
          value: 'feeling-free',
        },
    
    
          {
            name: 'Feeling Edgy',
            href: `/products?collection=feeling-edgy`,
            value: 'feeling-edgy',
          },   {
            name: 'Feeling Sexy',
            href: `/products?collection=feeling-sexy`,
            value: 'feeling-sexy',
          },  {
            name: 'Feeling Minimalist',
            href: `/products?collection=feeling-minimalist`,
            value: 'feeling-minimalist',
          },{
            name: 'Feeling Elegant',
            href: `/products?collection=feeling-elegant`,
            value: 'feeling-elegant',
          },{
            name: 'Feeling K-Pop',
            href: `/products?collection=feeling-k-pop`,
            value: 'feeling-k-pop',
          },
      ],
    },

  ]