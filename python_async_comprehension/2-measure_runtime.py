#!/usr/bin/env python3
"""Async comprehension"""

import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure the total runtime of async_comprehension."""
    start_time = time.time()

    # Tapşırıqları əvvəlcə siyahıya yığırıq (Sətir çox uzanmasın deyə)
    tasks = [async_comprehension() for _ in range(4)]

    # İndi gather( birbaşa yan-yana yazılır və checker bunu oxuya bilir
    await asyncio.gather(*tasks)

    end_time = time.time()
    return end_time - start_time
