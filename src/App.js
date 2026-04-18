import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState({});

  const menu = [
    { name: "Muzzarella", price: 20000 },
    { name: "Napolitana", price: 25000 },
    { name: "Fugazzeta", price: 28000 }
  ];

  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.name]: {
        price: item.price,
        qty: (prev[item.name]?.qty || 0) + 1
      }
    }));
  };

  const total = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div>

      {/* NAV */}
      <nav style={{ padding: 20, background: "white", display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ color: "#d94e1f" }}>La Cueva</h2>
        <div>
          <a href="#menu" style={{ marginRight: 15 }}>Menú</a>
          <a href="#reviews">Opiniones</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ textAlign: "center", padding: 40 }}>
        <h1 style={{ fontSize: 40 }}>Pizza a la piedra</h1>
        <p>+675 opiniones en Google ⭐ 4.8</p>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 10, maxWidth: 900, margin: "auto" }}>
          <img src="/pizza1.jpg" style={{ width: "100%", borderRadius: 10 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <img src="/pizza2.jpg" style={{ width: "100%", borderRadius: 10 }} />
            <img src="/local.jpg" style={{ width: "100%", borderRadius: 10 }} />
          </div>
        </div>

        <a
          href="https://wa.me/5491146394188?text=Hola quiero hacer un pedido"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: 20,
            padding: "12px 25px",
            background: "#25D366",
            color: "white",
            borderRadius: 8,
            textDecoration: "none"
          }}
        >
          Pedir por WhatsApp
        </a>
      </section>

      {/* MENU */}
      <section id="menu" style={{ padding: 40 }}>
        <h2>Menú</h2>
        <div style={{ display: "flex", gap: 20 }}>
          {menu.map((item) => (
            <div
              key={item.name}
              onClick={() => addToCart(item)}
              style={{ background: "#eee", padding: 20, cursor: "pointer" }}
            >
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: 40, background: "#f5f5f5" }}>
        <h2>Opiniones</h2>
        <div style={{ display: "flex", gap: 20 }}>
          <div>“Excelente pizza, muy recomendable”</div>
          <div>“Siempre llega caliente y rápido”</div>
          <div>“La mejor del barrio”</div>
        </div>
      </section>

      {/* CART */}
      <section style={{ padding: 40 }}>
        <h2>Tu pedido</h2>

        {Object.keys(cart).length === 0 ? (
          <p>Carrito vacío</p>
        ) : (
          <>
            {Object.entries(cart).map(([name, item]) => (
              <div key={name}>
                {name} x{item.qty} = ${item.price * item.qty}
              </div>
            ))}
            <h3>Total: ${total}</h3>
          </>
        )}
      </section>

      {/* BOTON FLOTANTE */}
      <a
        href="https://wa.me/5491146394188"
        target="_blank"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#25D366",
          color: "white",
          padding: 15,
          borderRadius: "50%"
        }}
      >
        💬
      </a>

    </div>
  );
}
