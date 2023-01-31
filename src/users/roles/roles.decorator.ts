/* eslint-disable prettier/prettier */
import { SetMetadata } from '@nestjs/common';
	import { Role } from '../enum/role.enum';

	export const ROLES_KEY = 'roles';
	export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

    /*
    Este decorador permite especificar qué roles se requieren para acceder a recursos específicos
    */