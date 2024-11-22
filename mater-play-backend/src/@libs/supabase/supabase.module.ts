import { Module } from "@nestjs/common";
import { SupabaseService } from "./supabase.service";
import { createClient } from '@supabase/supabase-js';

const SupabaseProvider = {
    provide: 'SUPABASE_CLIENT',
    useFactory: () => {
        return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
    }
}

@Module({
    providers: [SupabaseProvider, SupabaseService],
    exports: [SupabaseService]
})
export class SupabaseModule{}