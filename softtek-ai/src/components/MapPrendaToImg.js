function MapPrendaToImg(prenda) {
  switch (prenda) {
    case "Tights":
      return "https://www.skinija.lt/1751-large_default/wool-classics-tighs.jpgg";
    case "Sleep Pants":
      return "https://mccc-sportswear.com/cdn/shop/products/T225MPXXCT_1445x.png?v=1677690628";

    default:
      return "https://mccc-sportswear.com/cdn/shop/products/T225MPXXCT_1445x.png?v=1677690628";

  }
}

export default MapPrendaToImg;