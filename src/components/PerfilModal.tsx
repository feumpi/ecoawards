import User from "@/interfaces/User";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Icon } from "@iconify/react";

interface PerfilModal {
  user: User;
}

const PerfilModal = ({ user }: PerfilModal) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <div className="w-14 h-14">
            <img
              src={user.profilePicture}
              alt="Foto de perfil"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </DialogTrigger>
        <DialogContent className="h-screen">
          <div className="flex flex-col gap-8">
            <div className="w-full h-24 bg-primary rounded-lg">
              <img
                src={user.bannerPicture}
                className="object-cover w-96 rounded-lg"
              />
            </div>

            <div className="flex gap-4 items-end p-4 mt-[-60px]">
              <img
                src={user.profilePicture}
                className="w-16 h-16 rounded-full"
              />
              <p className="text-xl font-bold">
                {user.firstName} {user.lastName}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Conquistas</p>
              <div className="flex justify-start gap-4">
                {user.conquistas?.map((conquista) => (
                  <div className="flex flex-col items-center gap-1">
                    <div className="bg-gray-200 rounded-lg flex items-center justify-center w-16 h-16">
                      <Icon
                        icon={conquista.icon}
                        className="text-3xl text-gray-600"
                      />
                    </div>
                    <p className="font-semibold text-sm">{conquista.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Últimas atualizações</p>
              <div className="flex flex-col gap-3">
                {user.updates?.map((update) => (
                  <div className="flex gap-4 items-center justify-between bg-gray-100 rounded-lg p-2 py-4">
                    <Icon icon={update.icon} className="text-3xl" />
                    <p className="text-lg">{update.title}</p>
                    <p className="text-slate-600">+{update.points}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Produtos adquiridos</p>
              <div className="flex justify-start gap-4">
                {user.products?.map((product) => (
                  <div className="flex flex-col gap-1 w-24">
                    <div className="bg-gray-200 rounded-lg flex items-center justify-center w-16 h-16">
                      <img
                        src={product.picture}
                        className="w-full h-full rounded-lg"
                      />
                    </div>
                    <p className="font-semibold text-sm">{product.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PerfilModal;
