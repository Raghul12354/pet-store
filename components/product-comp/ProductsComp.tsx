import { Image, Text, View } from "react-native";

const petData = [
  {
    id: 1,
    title: "Persian Cat",
    desc: "A beautiful and fluffy Persian cat with a calm and loving personality.",
    img: "cat2_image.jpg",
    price: "$1500",
  },
  {
    id: 2,
    title: "Golden Retriever Puppy",
    desc: "A friendly and energetic Golden Retriever puppy, ready to find a loving home.",

    img: "dog2_image.jpg",
    price: "$1200",
  },
  {
    id: 3,
    title: "Shiba Inu",
    desc: "A charming Shiba Inu, independent yet affectionate, looking for a new family.",
    img: "cat2_image.jpg",
    price: "$3500",
  },
  {
    id: 4,
    title: "French Bulldog",
    desc: "Cute and compact French Bulldog, full of character and ready for a fun home.",
    img: "dog2_image.jpg",
    price: "$6500",
  },
  {
    id: 5,
    title: "Siberian Husky",
    desc: "An energetic and playful Siberian Husky with striking blue eyes, great for active owners.",
    img: "cat2_image.jpg",
    price: "$5600",
  },
  {
    id: 6,
    title: "Maine Coon Cat",
    desc: "A large, friendly, and intelligent Maine Coon cat that loves to socialize and play.",
    img: "dog2_image.jpg",
    price: "$9800",
  },
  {
    id: 7,
    title: "Labrador Retriever",
    desc: "A loving and loyal Labrador Retriever, perfect for families and outdoor activities.",
    img: "cat2_image.jpg",
    price: "$1300",
  },
  {
    id: 8,
    title: "Rottweiler",
    desc: "A confident and protective Rottweiler, excellent as a guard dog and companion.",
    img: "dog2_image.jpg",
    price: "$1100",
  },
  {
    id: 9,
    title: "Bengal Cat",
    desc: "A beautiful and exotic Bengal cat with a stunning spotted coat, playful and affectionate.",
    img: "cat2_image.jpg",
    price: "$3600",
  },
  {
    id: 10,
    title: "Pug Puppy",
    desc: "An adorable Pug puppy with a loving temperament, perfect for apartment living.",
    img: "dog2_image.jpg",
    price: "$7500",
  },
];

const imageMap: any = {
  "cat2_image.jpg": require("../../assets/images/cat2_image.jpg"),
  "dog2_image.jpg": require("../../assets/images/dog2_image.jpg"),
};

const ProductsComp = () => {
  return (
    <View
      style={{
        width: "60%",
        display: "flex",
        gap: 20,
      }}
    >
      {petData.map((item) => {
        const { id, title, desc, img, price } = item;
        return (
          <View
            key={id}
            style={{ backgroundColor: "#E5E4E2", borderRadius: 10 }}
          >
            <Image
              source={imageMap[img]}
              style={{
                width: "auto",
                height: 90,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              resizeMode="cover"
            />
            <View style={{ display: "flex", gap: 5, padding: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>{title}</Text>
              <Text style={{ fontSize: 12 }}>{desc}</Text>
              <Text style={{ fontWeight: "700" }}>{price}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ProductsComp;
