import { createFileRoute, redirect } from "@tanstack/react-router";

// URL antiga preservada: redireciona permanentemente para a nova página /totvs-rm
export const Route = createFileRoute("/solucoes/totvs-rm")({
  beforeLoad: () => {
    throw redirect({ to: "/totvs-rm", statusCode: 301 });
  },
});
