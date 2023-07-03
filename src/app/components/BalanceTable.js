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
          <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Conta
          </TableHeaderCell>
          <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Saldo Contabilístico
          </TableHeaderCell>
          <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Saldo Disponível
          </TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
            1088310001
          </TableCell>
          <TableCell className="text-right">
            <Text className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              1.740.199.418,86 EUR
            </Text>
          </TableCell>
          <TableCell className="text-right">
            <Text className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              1.740.199.418,86 EUR
            </Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
            1088315001
          </TableCell>
          <TableCell className="text-right">
            <Text className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              0,00 USD
            </Text>
          </TableCell>
          <TableCell className="text-right">
            <Text className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              0,00 USD
            </Text>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
            1088317001
          </TableCell>
          <TableCell className="text-right">
            <Text className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              0,00 EUR
            </Text>
          </TableCell>
          <TableCell className="text-right">
            <Text className="font-bold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              0,00 EUR
            </Text>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
