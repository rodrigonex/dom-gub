interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWidth?: number;
    border?: string;
    borderColor?: string;
    borderRadius: number;
    height?: number | string;
    width: number | string;
  };
  title: {
    color: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: number;
  };
}

const buttonTransparentSm: ButtonStyle = {
  button: {
    backgroundColor: "transparent",
    width: 164,
    border: "2px solid #00DE92",
    height: 44,
    borderRadius: 10,
  },
  title: {
    color: "#000000",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: 400,
  },
};

const buttonTransparentLg: ButtonStyle = {
  button: {
    backgroundColor: "transparent",
    width: 376,
    height: 44,
    borderRadius: 12,
    border: "2px solid #00DE92",
  },
  title: {
    color: "#000000",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: 400,
  },
};

const buttonGreenSm: ButtonStyle = {
  button: {
    backgroundColor: "#00DE92",
    width: 184,
    height: 44,
    borderRadius: 10,
    borderWidth: 0,
  },
  title: {
    color: "#00113F",
    fontFamily: "Montserrat",
    fontSize: "14px",
  },
};

const buttonBlueSm: ButtonStyle = {
  button: {
    backgroundColor: "#00113F",
    width: 188,
    height: 44,
    borderRadius: 10,
    borderWidth: 0,
  },
  title: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "14px",
  },
};

export const variantes = {
  buttonTransparentSm: buttonTransparentSm,
  buttonTransparentLg: buttonTransparentLg,
  buttonGreenSm: buttonGreenSm,
  buttonBlueSm: buttonBlueSm,
};
