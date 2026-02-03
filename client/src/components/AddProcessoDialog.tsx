/**
 * ═══════════════════════════════════════════════════════════════════════════
 * COMPONENTE: AddProcessoDialog
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Dialog para adicionar processo MANUALMENTE
 * Permite inserção de processos sem depender de Excel ou IA
 * 
 * @version 1.0.0
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Plus, FileText, User, Calendar, DollarSign, Scale } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const processoSchema = z.object({
  numeroProcesso: z.string().min(1, "Número do processo é obrigatório"),
  perito: z.string().optional(),
  classe: z.string().optional(),
  autor: z.string().optional(),
  reu: z.string().optional(),
  advogadoAutor: z.string().optional(),
  advogadoReu: z.string().optional(),
  assunto: z.string().optional(),
  dataRecebimento: z.string().optional(),
  vara: z.string().optional(),
  valorPericia: z.string().optional(),
  dataPericia: z.string().optional(),
  dataPrazo: z.string().optional(),
  localPericia: z.string().optional(),
  observacoes: z.string().optional(),
  pagamento: z.string().optional(),
  status: z.enum(["Aceito", "Negado", "Pendente"]).default("Pendente"),
  statusProcesso: z.enum(["Ativo", "Arquivado", "Concluido"]).default("Ativo"),
});

type ProcessoFormData = z.infer<typeof processoSchema>;

interface AddProcessoDialogProps {
  onSuccess?: () => void;
  triggerButton?: React.ReactNode;
}

export default function AddProcessoDialog({ onSuccess, triggerButton }: AddProcessoDialogProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("basico");
  const utils = trpc.useUtils();
  const createProcesso = trpc.processos.create.useMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ProcessoFormData>({
    resolver: zodResolver(processoSchema),
    defaultValues: {
      numeroProcesso: "",
      perito: "Dr. Adiel Rios",
      classe: "",
      autor: "",
      reu: "",
      advogadoAutor: "",
      advogadoReu: "",
      assunto: "",
      dataRecebimento: new Date().toISOString().split("T")[0],
      vara: "",
      valorPericia: "",
      dataPericia: "",
      dataPrazo: "",
      localPericia: "",
      observacoes: "",
      pagamento: "Pendente",
      status: "Pendente",
      statusProcesso: "Ativo",
    },
  });

  const onSubmit = async (data: ProcessoFormData) => {
    setIsSubmitting(true);
    try {
      const processData = {
        numeroProcesso: data.numeroProcesso.trim(),
        perito: data.perito?.trim() || "Dr. Adiel Rios",
        classe: data.classe?.trim() || null,
        autor: data.autor?.trim() || null,
        reu: data.reu?.trim() || null,
        advogadoAutor: data.advogadoAutor?.trim() || null,
        advogadoReu: data.advogadoReu?.trim() || null,
        assunto: data.assunto?.trim() || null,
        dataRecebimento: data.dataRecebimento ? new Date(data.dataRecebimento) : null,
        vara: data.vara?.trim() || null,
        valorPericia: data.valorPericia ? Math.round(parseFloat(data.valorPericia.replace(",", ".")) * 100) : null,
        dataPericia: data.dataPericia ? new Date(data.dataPericia) : null,
        dataPrazo: data.dataPrazo ? new Date(data.dataPrazo) : null,
        localPericia: data.localPericia?.trim() || null,
        observacoes: data.observacoes?.trim() || null,
        pagamento: data.pagamento || "Pendente",
        status: data.status,
        statusProcesso: data.statusProcesso,
      };

      await createProcesso.mutateAsync(processData);
      
      toast.success("Processo criado com sucesso!", {
        description: `Processo ${data.numeroProcesso} adicionado ao sistema.`,
      });
      
      utils.processos.list.invalidate();
      reset();
      setActiveTab("basico");
      setOpen(false);
      onSuccess?.();
    } catch (error: any) {
      console.error("Erro ao criar processo:", error);
      toast.error("Erro ao criar processo", {
        description: error?.message || "Verifique os dados e tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    setActiveTab("basico");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerButton || (
          <Button 
            className="bg-[#1B3A5C] hover:bg-[#152d47] text-white shadow-sm"
            size="sm"
          >
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Processo
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4 border-b">
          <DialogTitle className="flex items-center gap-2 text-[#1B3A5C] text-xl">
            <Scale className="w-6 h-6 text-[#B8956A]" />
            Novo Processo
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Preencha os dados do processo manualmente. Campos com <span className="text-red-500">*</span> são obrigatórios.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="basico" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Básicos
              </TabsTrigger>
              <TabsTrigger value="partes" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Partes
              </TabsTrigger>
              <TabsTrigger value="datas" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Datas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basico" className="space-y-4 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="numeroProcesso" className="text-sm font-medium">
                    Número do Processo <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="numeroProcesso"
                    placeholder="0000000-00.0000.0.00.0000"
                    {...register("numeroProcesso")}
                    className={errors.numeroProcesso ? "border-red-500" : ""}
                  />
                  {errors.numeroProcesso && (
                    <p className="text-red-500 text-xs">{errors.numeroProcesso.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="perito">Perito</Label>
                  <Input id="perito" {...register("perito")} defaultValue="Dr. Adiel Rios" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="vara">Vara / Câmara</Label>
                  <Input id="vara" placeholder="Ex: 1ª Vara Cível" {...register("vara")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="classe">Classe</Label>
                  <Input id="classe" placeholder="Ex: Procedimento Comum" {...register("classe")} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="assunto">Assunto</Label>
                <Textarea id="assunto" placeholder="Descreva o assunto..." {...register("assunto")} rows={3} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Status da Perícia</Label>
                  <Select value={watch("status")} onValueChange={(v: any) => setValue("status", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pendente">Pendente</SelectItem>
                      <SelectItem value="Aceito">Aceito</SelectItem>
                      <SelectItem value="Negado">Negado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Status do Processo</Label>
                  <Select value={watch("statusProcesso")} onValueChange={(v: any) => setValue("statusProcesso", v)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ativo">Ativo</SelectItem>
                      <SelectItem value="Concluido">Concluído</SelectItem>
                      <SelectItem value="Arquivado">Arquivado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="partes" className="space-y-4 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="autor">Autor / Requerente</Label>
                  <Input id="autor" placeholder="Nome completo" {...register("autor")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reu">Réu / Requerido</Label>
                  <Input id="reu" placeholder="Nome completo" {...register("reu")} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="advogadoAutor">Advogado do Autor</Label>
                  <Input id="advogadoAutor" placeholder="Nome e OAB" {...register("advogadoAutor")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="advogadoReu">Advogado do Réu</Label>
                  <Input id="advogadoReu" placeholder="Nome e OAB" {...register("advogadoReu")} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="localPericia">Local da Perícia</Label>
                <Input id="localPericia" placeholder="Endereço" {...register("localPericia")} />
              </div>
            </TabsContent>

            <TabsContent value="datas" className="space-y-4 mt-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dataRecebimento">Data de Recebimento</Label>
                  <Input id="dataRecebimento" type="date" {...register("dataRecebimento")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dataPrazo">Data Prazo</Label>
                  <Input id="dataPrazo" type="date" {...register("dataPrazo")} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dataPericia">Data da Perícia</Label>
                  <Input id="dataPericia" type="date" {...register("dataPericia")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valorPericia">Valor (R$)</Label>
                  <Input id="valorPericia" placeholder="0,00" {...register("valorPericia")} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Pagamento</Label>
                <Select value={watch("pagamento")} onValueChange={(v) => setValue("pagamento", v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pendente">Pendente</SelectItem>
                    <SelectItem value="Pago">Pago</SelectItem>
                    <SelectItem value="Parcial">Parcial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="observacoes">Observações</Label>
                <Textarea id="observacoes" placeholder="Observações..." {...register("observacoes")} rows={3} />
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter className="mt-6 pt-4 border-t">
            <Button type="button" variant="outline" onClick={handleClose}>Cancelar</Button>
            <Button type="submit" disabled={isSubmitting} className="bg-[#1B3A5C] hover:bg-[#152d47]">
              {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Salvando...</> : <><Plus className="w-4 h-4 mr-2" />Criar Processo</>}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
