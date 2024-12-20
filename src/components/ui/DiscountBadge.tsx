import { products } from "@wix/stores";
import Badge from "./badge";

interface DiscountBadgeProps {
  data: products.Discount;
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({ data }) => {
  if (data.type !== "PERCENT") {
    return null;
  }
  return <Badge classname="bg-pink-400">{data.value}% off</Badge>;
};

export default DiscountBadge;
