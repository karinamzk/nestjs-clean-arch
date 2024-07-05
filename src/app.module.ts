import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EnvConfigModule } from './shared/infrastructure/env-config/env-config.module';
import { UsersModule } from './users/infrastructure/users.module';

// Os modulos são classes decoradas com @Module, que são usadas para organizar o código em módulos.
@Module({
  imports: [EnvConfigModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// O AppModule é o ponto de entrada da aplicação. Ele é o módulo raiz que é carregado pelo NestJS.
// O AppModule é um módulo de aplicação que é responsável por importar e organizar todos os outros módulos, controladores e provedores da aplicação.
// MVC (Model-View-Controller) é um padrão de arquitetura de software que separa a aplicação em três componentes principais: Model, View e Controller.
