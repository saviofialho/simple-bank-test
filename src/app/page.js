"use client";

import { Badge, DatePicker, DonutChart } from "@tremor/react";
import BalancaTable from "./components/BalanceTable";
import { ArrowRightLeft, DollarSign, List, Tag } from "lucide-react";

const valueFormatter = (number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[1440px] bg-gray-50 px-5 py-10">
      <div className="grid grid-cols-3 gap-x-8 gap-y-16">
        {/* SALDOS */}
        <div className="col-span-2">
          <div className="border-b-4 border-gray-400 pb-4">
            <h3 className="text-sm uppercase text-gray-600">Saldos</h3>
          </div>
          <BalancaTable />
        </div>
        {/* ACESSOS */}
        <div>
          <div className="border-b-4 border-gray-400 pb-4">
            <h3 className="text-sm uppercase text-gray-600">Acessos Rápidos</h3>
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-8">
            <li>
              <a href="#" className="flex flex-col items-center justify-center">
                <DollarSign height={40} width={40} className="text-[#F68C23]" />
                <p className="text-[#F68C23]">Contas</p>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center justify-center">
                <ArrowRightLeft
                  height={40}
                  width={40}
                  className="text-[#F68C23]"
                />
                <p className="text-[#F68C23]">Movimentos</p>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center justify-center">
                <List height={40} width={40} className="text-[#F68C23]" />
                <p className="text-[#F68C23]">Operações</p>
              </a>
            </li>
            <li>
              <a href="#" className="flex flex-col items-center justify-center">
                <Tag height={40} width={40} className="text-[#F68C23]" />
                <p className="text-[#F68C23]">NIB / IBAN</p>
              </a>
            </li>
          </ul>
        </div>
        {/* OPERAÇÔES PENDENTES */}
        <div>
          <div className="border-b-4 border-gray-400 pb-4">
            <h3 className="text-sm uppercase text-gray-600">
              Operações Pendentes
            </h3>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <DatePicker />
            <div>
              <div className="flex items-center gap-2">
                <Badge size="sm" color="orange">
                  <p className="text-transparent">T</p>
                </Badge>
                <p className="text-sm text-[#F68C23]">
                  Transferência Nacional Permanente
                </p>
              </div>
              <div>
                <p className="text-sm">2203 - 5.000.000,00 EUR</p>
                <p className="text-sm">sptr perm</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Badge size="sm" color="orange">
                  <p className="text-transparent">T</p>
                </Badge>
                <p className="text-sm text-[#F68C23]">Transferência Nacional</p>
              </div>
              <div>
                <p className="text-sm">2203 - 5.000.000,00 EUR</p>
                <p className="text-sm">sptr perm</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Badge size="sm" color="green">
                  <p className="text-transparent">T</p>
                </Badge>
                <p className="text-sm text-[#F68C23]">
                  Transferência Nacional Permanente
                </p>
              </div>
              <div>
                <p className="text-sm">2203 - 5.000.000,00 EUR</p>
                <p className="text-sm">sptr perm</p>
              </div>
            </div>
          </div>
        </div>
        {/* OPERAÇÔES FREQUENTES */}
        <div>
          <div className="border-b-4 border-gray-400 pb-4">
            <h3 className="text-sm uppercase text-gray-600">
              Operações Frequentes
            </h3>
          </div>
          <ul className="mt-6 flex flex-col gap-2">
            <li>
              <a
                className="cursor-pointer text-sm uppercase text-[#F68C23]"
                href="#"
              >
                TRANSFERÊNCIA NACIONAL
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer text-sm uppercase text-[#F68C23]"
                href=""
              >
                TRANSFERÊNCIA NACIONAL PERMANENTE
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer text-sm uppercase text-[#F68C23]"
                href=""
              >
                PEDIDO DE CHEQUES
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer text-sm uppercase text-[#F68C23]"
                href=""
              >
                TRANSFERÊNCIAS EM LOTE
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer text-sm uppercase text-[#F68C23]"
                href=""
              >
                PAGAMENTOS AO ESTADO
              </a>
            </li>
          </ul>
        </div>
        {/* PATRIMÔNIO */}
        <div>
          <div className="border-b-4 border-gray-400 pb-4">
            <h3 className="text-sm uppercase text-gray-600">Patrimônio</h3>
          </div>
          <div className="mt-6">
            <DonutChart
              data={[
                {
                  name: "Carteira de Títulos",
                  sales: 9800,
                },
                {
                  name: "Créditos",
                  sales: 4567,
                },
              ]}
              category="sales"
              index="name"
              valueFormatter={valueFormatter}
              colors={["orange", "blue"]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
