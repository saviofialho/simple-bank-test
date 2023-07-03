import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge,
} from "@tremor/react";

export default function BalancaTable() {
  return (
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Conta</TableHeaderCell>
          <TableHeaderCell className="text-right">
            Saldo Contabilístico
          </TableHeaderCell>
          <TableHeaderCell className="text-right">
            Saldo Disponível
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>1088310001</TableCell>
          <TableCell className="text-right">
            <Text className="font-bold">1.740.199.418,86 EUR</Text>
          </TableCell>
          <TableCell className="text-right">
            <Text className="font-bold">1.740.199.418,86 EUR</Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1088315001</TableCell>
          <TableCell className="text-right">
            <Text className="font-bold">0,00 USD</Text>
          </TableCell>
          <TableCell className="text-right">
            <Text className="font-bold">0,00 USD</Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1088317001</TableCell>
          <TableCell className="text-right">
            <Text className="font-bold">0,00 EUR</Text>
          </TableCell>
          <TableCell className="text-right">
            <Text className="font-bold">0,00 EUR</Text>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
