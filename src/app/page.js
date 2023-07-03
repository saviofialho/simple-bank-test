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

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[1440px] bg-gray-50 px-5 py-10">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="border-b-4 border-gray-400 pb-4">
            <h3 className="uppercase text-gray-600">Saldos</h3>
          </div>
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
        </div>
        <div>
          <div className="border-b-4 border-gray-400 pb-4">
            <h3 className="uppercase text-gray-600">Icons</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
