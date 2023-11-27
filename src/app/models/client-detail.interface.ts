export interface ClientDetailResponse {
    id:        string;
    nombre:    string;
    email:     string;
    avatar:    string;
    direccion: string;
    codPostal: string;
    poblacion: string;
    puntos:    number;
    pedidos:   PedidoShort[];
}

export interface PedidoShort {
    id:           string;
    fecha:        string;
    estadoPedido: string;
    importeTotal: number;
}
