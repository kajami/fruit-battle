const selectorStyles = {
    control: (styles) => ({
        ...styles,
        borderRadius:'10px'
    }),
    container: (base) => ({
        ...base,
        width:'180px',
        minWidth:'130px',
        border: 0,
        borderRadius:'10px'
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius:'10px',
    }),
    option: (provided) => ({
        ...provided,
        borderRadius:'10px',
    }),
    menuList: (base) => ({
        ...base,
        "::-webkit-scrollbar": {
          width: "10px",
          height: "0px",
        },
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1"
        },
        "::-webkit-scrollbar-thumb": {
          background: "rgb(233, 166, 78)"
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "lightgreen"
        }
      })  
};

export default selectorStyles;