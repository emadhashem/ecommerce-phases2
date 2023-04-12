export const orderState = (state: any) => {
  switch (state) {
    case "in_progress":
      return (
        <div
          className="order-state"
          style={{
            backgroundColor: "rgba(52, 126, 223, 0.2)",
            color: "#347EDF",
          }}
        >
          قيد التجهيز
        </div>
      );
    case "in_basket":
      return (
        <div
          className="order-state"
          style={{
            backgroundColor: "rgba(52, 180, 243, 0.2)",
            color: "#34B4F3",
          }}
        >
          في السلة
        </div>
      );
    case "done":
      return (
        <div
          className="order-state"
          style={{
            backgroundColor: "rgba(11, 200, 120, 0.2)",
            color: "#0BC878",
          }}
        >
          تم التسليم
        </div>
      );
    case "delevirt":
      return (
        <div
          className="order-state"
          style={{
            backgroundColor: "rgba(241, 141, 82, 0.2",
            color: "#F18D52",
          }}
        >
          قيد التوصيل
        </div>
      );
    case "canceled":
      return (
        <div
          className="order-state"
          style={{
            backgroundColor: "rgba(219, 85, 114, 0.2)",
            color: "#DB5572",
          }}
        >
          ملغاة
        </div>
      );
    default:
      return "";
  }
};
