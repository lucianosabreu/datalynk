import { createFileRoute, redirect } from "@tanstack/react-router";

// URL antiga preservada: redireciona permanentemente para a nova página /totvs-protheus
export const Route = createFileRoute("/solucoes/totvs-protheus")({
  beforeLoad: () => {
    throw redirect({ to: "/totvs-protheus", statusCode: 301 });
  },
});
