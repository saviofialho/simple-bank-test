import { Badge, DatePicker, DateRangePickerItem, Icon } from "@tremor/react";
import BalancaTable from "./components/BalanceTable";

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
      </div>
    </main>
  );
}
